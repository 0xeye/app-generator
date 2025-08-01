import { ErrorMessage } from '@/components/shared/ErrorMessage'
import { useAccount } from '@/hooks/useAccount'
import { useInput } from '@/hooks/useInput'
import { exactToSimple, simpleToExact } from '@/utils'
import { cn } from '@/utils/cn'
import { ChangeEvent, FC } from 'react'

interface Props {
  input: ReturnType<typeof useInput>
  className?: string
  balance?: bigint
  defaultSymbol?: string
  symbol?: string
  placeholder?: string
  title?: string
  disabled?: boolean
  errorMessage?: string
  onInputChange?: (value: bigint) => void
  onButtonClick?: () => void
}

export const InputTokenAmount: FC<Props> = ({
  input,
  className,
  balance,
  symbol,
  placeholder,
  disabled: _disabled,
  errorMessage,
  onInputChange,
  onButtonClick,
  title,
  defaultSymbol = 'Select Vault',
}) => {
  const account = useAccount()
  const [
    {
      formValue,
      activity: [, setActive],
    },
    handleChangeInput,
  ] = input
  const disabled = _disabled || !account

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    handleChangeInput(event)
    onInputChange?.(simpleToExact(event.target.value))
  }

  return (
    <div className={cn('flex flex-col w-full space-y-1', className)}>
      {title && (
        <div className="flex items-center gap-2 p-1">
          <label className="text-sm font-normal text-black">{title}</label>
        </div>
      )}
      <div className="bg-black/5 rounded-xl p-3 flex flex-col gap-2.5">
        <div className={cn('flex flex-row justify-between gap-2 items-center w-full')}>
          <input
            disabled={disabled}
            placeholder={placeholder ?? '0.00'}
            value={formValue}
            onChange={handleInputChange}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            className={cn(
              'flex-grow bg-transparent outline-none text-lg sm:text-[20px] font-mono min-w-0',
              disabled ? 'text-gray-700' : 'text-gray-900',
              'placeholder:text-gray-400',
            )}
          />
          {!!onButtonClick && (
            <button
              type="button"
              onClick={onButtonClick}
              className="bg-[#401BE4] text-white px-2 sm:px-3 py-1 rounded-xl  font-medium hover:bg-[#401BE4]/90 transition-colors cursor-pointer whitespace-nowrap max-w-[120px] sm:max-w-none truncate flex-shrink-0"
            >
              {symbol ?? defaultSymbol}
            </button>
          )}
        </div>
        <div className={cn('flex flex-row justify-between gap-2 items-center w-full min-w-0')}>
          <div className="text-xs text-gray-500 truncate min-w-0 flex-1">
            {!symbol
              ? 'No Vault Selected'
              : `${exactToSimple(balance, input[0].decimals)} ${symbol}`}
          </div>
          {errorMessage && (
            <ErrorMessage message={errorMessage} className="text-xs flex-shrink-0" />
          )}
        </div>
      </div>
    </div>
  )
}
