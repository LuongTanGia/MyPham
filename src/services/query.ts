import { useQuery, QueryKey } from '@tanstack/react-query';

export const useCustomQuery = <T>(
  queryKey: QueryKey,
  queryFn: () => Promise<T>,
) => {
  return useQuery<T>({
    queryKey,
    queryFn,
  });
};
