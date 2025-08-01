import { type ComponentProps, type FC, type ReactNode, useEffect, useRef, useState } from 'react'
import {
  type UseSimulateContractReturnType,
  useChains,
  usePublicClient,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { useNotifications } from '../../hooks/useNotifications'
import { Button } from './Button'

type Props = {
  prepareWrite: UseSimulateContractReturnType
  transactionName: string
  isApproved?: boolean
  disabled?: boolean
  onSuccess?: () => void
  showEmojisplosion?: boolean
  additionalComponent?: ReactNode
}

type ButtonState =
  | 'loading'
  | 'success'
  | 'error'
  | 'wrongChain'
  | 'default'
  | 'simulating'
  | 'approved'

const spinnerStyle = {
  animation: 'spin 1s linear infinite',
  width: '16px',
  height: '16px',
}

const TxButton: FC<Props & ComponentProps<typeof Button>> = ({
  prepareWrite,
  transactionName = 'Send',
  disabled: _disabled,
  isApproved,
  onSuccess,
  showEmojisplosion = false,
  additionalComponent,
  ...props
}) => {
  const writeContract = useWriteContract()
  const chains = useChains()
  const receipt = useWaitForTransactionReceipt({ hash: writeContract.data })
  const [override, setOverride] = useState<ButtonState>()
  const client = usePublicClient()
  const { addNotification } = useNotifications()

  const ref = useRef<(number | undefined)[]>()

  const txChainId = prepareWrite.data?.request.chainId
  const currentChain = chains.find((chain) => chain.id === client?.chain?.id)

  const wrongNetwork = txChainId && currentChain?.id !== txChainId

  const { isSuccess: isTxSuccess, isError } = receipt
  const { isError: isSimulatedError, isFetching: isSimulating } = prepareWrite

  const isLoading = override === 'loading'
  const isSuccess = override === 'success'

  const disabled = _disabled || !prepareWrite.isSuccess || isLoading || isSimulating

  const ButtonContentType: ButtonState | undefined = (() => {
    if (wrongNetwork) return 'wrongChain'
    if (isLoading) return 'loading'
    if (isSimulating) return 'simulating'
    if (isApproved) return 'approved'
    if (isSuccess) return 'success'
    if (isError || isSimulatedError) return 'error'
    return 'default'
  })()

  const ButtonContent: Record<ButtonState, ReactNode> = {
    success: (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        Success!
      </div>
    ),
    default: (
      <div className="flex items-center gap-2">
        {transactionName}
        {additionalComponent}
      </div>
    ),
    error: (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Failed
      </div>
    ),
    approved: (
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Approved
      </div>
    ),
    simulating: (
      <div className="flex items-center justify-center gap-2">
        <svg
          aria-label="Loading"
          style={spinnerStyle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span>Simulating</span>
      </div>
    ),
    loading: (
      <div className="flex items-center justify-center gap-2">
        <svg
          style={spinnerStyle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          color="#000000"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span className="text-neutral-900">Loading</span>
      </div>
    ),
    wrongChain: txChainId
      ? `Switch to ${chains.find((chain) => chain.id === txChainId)?.name || 'Unknown Chain'}`
      : 'Wrong chain',
  }

  // Determine button variant based on state
  const getVariant = () => {
    if (isError || isSimulatedError) return 'error'
    if (isSuccess) return 'success'
    if (isLoading || isSimulating) return 'loading'
    return props.variant || 'filled'
  }

  useEffect(() => {
    if (isSuccess) {
      const type = receipt.data?.status === 'success' ? 'success' : 'error'
      addNotification(type, receipt?.data?.transactionHash, transactionName)
    }
  }, [receipt.data, isSuccess, transactionName])

  useEffect(() => {
    if (isTxSuccess) {
      onSuccess?.()
      setOverride('success')

      const timer = setTimeout(() => {
        setOverride(undefined)
      }, 1500)
      return () => clearTimeout(timer)
    }
    setOverride(undefined)
  }, [receipt.status])

  return (
    <Button
      variant={getVariant()}
      isDisabled={disabled || wrongNetwork}
      isBusy={isLoading}
      className={`w-full h-[3.25rem] ${props.className || ''}`}
      onClick={async (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        ref.current = [event?.clientX, event?.clientY]

        const overrides = await (async () => {
          if (!prepareWrite.data?.request || !client) return {}
          try {
            const gasEstimate = await client.estimateContractGas(prepareWrite.data.request as any)
            if (gasEstimate) {
              const gas = (gasEstimate * BigInt(110)) / BigInt(100) // 10% buffer
              return { gas }
            }
            return {}
          } catch (error) {
            console.error(`Failed estimation for ${prepareWrite.data.request.functionName}`, error)
            return {}
          }
        })()

        if (prepareWrite.isSuccess && prepareWrite.data?.request) {
          setOverride('loading')
          writeContract
            .writeContractAsync({ ...prepareWrite.data.request, ...overrides })
            .then((hash) => {
              addNotification('pending', hash, transactionName)
            })
            .catch((error) => {
              setOverride(undefined)
              addNotification('error', undefined, `Failed to submit ${transactionName}`)
              console.error('Transaction failed:', error)
            })
        }
      }}
      {...props}
    >
      {ButtonContent[ButtonContentType]}
    </Button>
  )
}

export { TxButton }
