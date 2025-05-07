import { QueryKey, useMutation, useQueryClient } from '@tanstack/react-query'
import { notification } from 'antd'

export const useCreateUseMutation = <T, U>(
  mutationFn: (data: T) => Promise<U>,
  mutationKey: string | string[],
  refetchQueryKey?: QueryKey
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (data: T) => await mutationFn(data),
    mutationKey: [mutationKey],
    onSuccess: () => {
      if (refetchQueryKey) {
        queryClient.invalidateQueries({ queryKey: refetchQueryKey })
      }
    },
    onError: (error) => {
      notification.error({ message: error.message })
    }
  })
}
