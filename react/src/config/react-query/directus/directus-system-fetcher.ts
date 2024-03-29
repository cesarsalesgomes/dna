import { decrementFetchesBeingPerformedAtom, incrementFetchesBeingPerformedAtom } from '@atoms/fetches-being-performed.atom';
import { DIRECTUS_URL } from '@constants/directus.constants';
import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { useErrorHandler } from '@features/error-handler';
import IgnoreFetchesBeingPerformedAtom from '@interfaces/ignore-fetches-being-performed-atom';
import { checkWhetherToIgnoreFetchesBeingPerformedAtom } from '@utils/react-query.utils';
import { useAtom } from 'jotai';

import { DirectusRequestOptions, resetDirectusRequestOptions } from './directus-config-options';

export const useDirectusSystemFetcher = <TData, TVariables>(
  query: string
): ((variables?: TVariables & IgnoreFetchesBeingPerformedAtom) => Promise<TData>) => {
  const [, incrementFetchesBeingPerformed] = useAtom(incrementFetchesBeingPerformedAtom);
  const [, decrementFetchesBeingPerformed] = useAtom(decrementFetchesBeingPerformedAtom);
  const { reactQueryErrorHandler } = useErrorHandler();

  return async (variables?: TVariables & IgnoreFetchesBeingPerformedAtom): Promise<TData> => {
    const ignoreFetchesBeingPerformed = checkWhetherToIgnoreFetchesBeingPerformedAtom(variables);

    try {
      if (!ignoreFetchesBeingPerformed) incrementFetchesBeingPerformed();

      const res = await fetch(`${DIRECTUS_URL}/graphql/system`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
        ...(DirectusRequestOptions.options ?? {}),
      });

      const json = await res.json();

      if (json.errors) {
        return reactQueryErrorHandler(json.errors[0]) as any;
      }

      return json.data;
    } catch (error) {
      return reactQueryErrorHandler(new Error(UNEXPECTED_ERROR_NOTIFICATION)) as any;
    } finally {
      resetDirectusRequestOptions();

      if (!ignoreFetchesBeingPerformed) decrementFetchesBeingPerformed();
    }
  };
};
