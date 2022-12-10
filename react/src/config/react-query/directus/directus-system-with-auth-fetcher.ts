import { incrementFetchesBeingPerformedAtom, decrementFetchesBeingPerformedAtom } from '@atoms/fetches-being-performed.atom';
import { DIRECTUS_URL } from '@constants/directus.constants';
import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { accessTokenAtom } from '@features/auth/atoms';
import useErrorHandler from '@features/error-handler/hooks/error-handler.hooks';
import IgnoreFetchesBeingPerformedAtom from '@interfaces/ignore-fetches-being-performed-atom';
import { checkWhetherToIgnoreFetchesBeingPerformedAtom } from '@utils/react-query.utils';
import { useAtom } from 'jotai';

import { DirectusRequestOptions, resetDirectusRequestOptions } from './directus-config-options';

export const useDirectusSystemWithAuthFetcher = <TData, TVariables>(
  query: string
): ((variables?: TVariables & IgnoreFetchesBeingPerformedAtom) => Promise<TData>) => {
  const [accessToken] = useAtom(accessTokenAtom);
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
          Authorization: `Bearer ${accessToken}`
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
