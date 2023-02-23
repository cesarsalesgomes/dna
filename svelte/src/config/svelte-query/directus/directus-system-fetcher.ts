import { DIRECTUS_URL } from '@constants/directus.constants';
import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { svelteQueryErrorHandler } from '@features/error-handler/utils/svelte-query-error-handler.utils';
import { decrementFetchesBeingPerformed, incrementFetchesBeingPerformed } from 'src/stores/fetches-being-performed.store';

import { DirectusRequestOptions } from './directus-config-options';

export const useDirectusSystemFetcher = <TData, TVariables>(query: string):
  ((variables?: TVariables) => Promise<TData>) => async (variables?: TVariables): Promise<TData> => {
    try {
      incrementFetchesBeingPerformed();

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
        return svelteQueryErrorHandler(json.errors[0]) as any;
      }

      return json.data;
    } catch (error) {
      return svelteQueryErrorHandler(new Error(UNEXPECTED_ERROR_NOTIFICATION)) as any;
    } finally {
      decrementFetchesBeingPerformed();
    }
  };
