import { useSdk } from '@/context/Sdk'
import { queryKeys } from '@/utils/queryKeys'
import { useQuery } from '@tanstack/react-query'
import { useChainId } from 'wagmi'

// Example usage of useSdk hook wrapped in tanstack for caching
export const useDemo = () => {
  const sdk = useSdk()
  const chainId = useChainId()

  return useQuery({
    queryKey: queryKeys.demo(chainId), // demo key in helper for reuse across app / invalidation
    queryFn: () => sdk.core.demoFunction(),
    staleTime: 60 * 1000, // 1 minute
  })
}
