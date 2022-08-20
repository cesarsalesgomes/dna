import QueryClientSingleton from '@providers/query-client.provider';

export function invalidateQueriesOnSuccess(queryKeys: string[]) {
  return {
    onSuccess: () => QueryClientSingleton.getInstance().invalidateQueries(queryKeys)
  };
}
