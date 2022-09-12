import IgnoreFetchesBeingPerformedAtom from '@interfaces/ignore-fetches-being-performed-atom';
import QueryClientSingleton from '@providers/query-client.provider';

export function invalidateQueriesOnSuccess(queryKeys: string[]) {
  return {
    onSuccess: () => QueryClientSingleton.getInstance().invalidateQueries(queryKeys)
  };
}

export function checkWhetherToIgnoreFetchesBeingPerformedAtom<TVariables>(
  variables?: TVariables & IgnoreFetchesBeingPerformedAtom
): boolean {
  if (variables && variables.ignoreFetchesBeingPerformedAtom) {
    // eslint-disable-next-line no-param-reassign
    delete variables.ignoreFetchesBeingPerformedAtom;

    return true;
  }

  return false;
}
