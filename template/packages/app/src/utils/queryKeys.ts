import { QueryClient } from '@tanstack/react-query'

// Key store for all queries
export const queryKeys = {
  demo: (chainId: number) => ['demo-key', chainId] as const,
} as const

// Helper functions for query operations
export const queryHelpers = {
  clearChainQueries: (queryClient: QueryClient) => {
    return queryClient.removeQueries({
      predicate: (query) => query.queryKey[0] === 'yDaemon' || query.queryKey[0] === 'kong',
    })
  },
  removeChainQueries: (queryClient: QueryClient, chainId: number) => {
    return queryClient.removeQueries({
      predicate: (query) => {
        const key = query.queryKey
        return key.includes(chainId)
      },
    })
  },
}
