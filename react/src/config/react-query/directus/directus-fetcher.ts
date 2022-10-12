/**
 * Custom fetchers used by React Query Codegen (https://www.graphql-code-generator.com/plugins/typescript-react-query)
 */

import { decrementFetchesBeingPerformedAtom, incrementFetchesBeingPerformedAtom } from '@atoms/fetches-being-performed.atom';
import { DIRECTUS_URL } from '@constants/directus.constants';
import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { accessTokenAtom } from '@features/auth/atoms';
import { useErrorHandler } from '@features/error-handler';
import IgnoreFetchesBeingPerformedAtom from '@interfaces/ignore-fetches-being-performed-atom';
import { checkWhetherToIgnoreFetchesBeingPerformedAtom } from '@utils/react-query.utils';
import { useAtom } from 'jotai';

export const useDirectusFetcher = <TData, TVariables>(
  query: string, options?: RequestInit['headers']
): ((variables?: TVariables & IgnoreFetchesBeingPerformedAtom) => Promise<TData>) => {
  const [accessToken] = useAtom(accessTokenAtom);
  const [, incrementFetchesBeingPerformed] = useAtom(incrementFetchesBeingPerformedAtom);
  const [, decrementFetchesBeingPerformed] = useAtom(decrementFetchesBeingPerformedAtom);
  const { reactQueryErrorHandler, resetReactQueryErrorHandler } = useErrorHandler();

  return async (variables?: TVariables & IgnoreFetchesBeingPerformedAtom): Promise<TData> => {
    const ignoreFetchesBeingPerformed = checkWhetherToIgnoreFetchesBeingPerformedAtom(variables);

    try {
      if (!ignoreFetchesBeingPerformed) incrementFetchesBeingPerformed();

      const res = await fetch(`${DIRECTUS_URL}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify({ query, variables }),
        ...(options ?? {}),
      });

      const json = await res.json();

      if (json.errors) {
        return reactQueryErrorHandler(json.errors[0]) as any;
      }

      resetReactQueryErrorHandler();

      return json.data;
    } catch (error) {
      // TODO: send error to analytics
      return reactQueryErrorHandler(new Error(UNEXPECTED_ERROR_NOTIFICATION)) as any;
    } finally {
      if (!ignoreFetchesBeingPerformed) decrementFetchesBeingPerformed();
    }
  };
};