import QueryClientSingleton from '@providers/svelte-query-client.provider';

export function invalidateQueriesOnSuccess(queryKeys: string[]) {
  return {
    onSuccess: () => QueryClientSingleton.getInstance().invalidateQueries(queryKeys),
  };
}
