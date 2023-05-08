import type IgnoreFetchesBeingPerformed from '@interfaces/ignore-fetches-being-performed.interface';
import QueryClientSingleton from '@providers/svelte-query-client.provider';

export function invalidateQueriesOnSuccess(queryKeys: string[]) {
  return {
    onSuccess: () => QueryClientSingleton.getInstance().invalidateQueries(queryKeys),
  };
}

export function checkWhetherToIgnoreFetchesBeingPerformed(variables?: IgnoreFetchesBeingPerformed): boolean {
  if (variables && variables.ignoreFetchesBeingPerformed) {
    // eslint-disable-next-line no-param-reassign
    delete variables.ignoreFetchesBeingPerformed;

    return true;
  }

  return false;
}
