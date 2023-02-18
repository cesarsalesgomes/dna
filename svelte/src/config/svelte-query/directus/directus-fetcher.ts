import { get } from 'svelte/store';

import { DIRECTUS_URL } from '@constants/directus.constants';
import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { accessTokenStore } from '@features/auth/stores';
import { svelteQueryErrorHandler } from '@features/error-handler/utils/svelte-query-error-handler.utils';

import { DirectusRequestOptions } from './directus-config-options';

export const useDirectusFetcher = <TData, TVariables>(query: string):
  ((variables?: TVariables) => Promise<TData>) => async (variables?: TVariables): Promise<TData> => {
    try {
      const accessToken = get(accessTokenStore);

      const res = await fetch(`${DIRECTUS_URL}/graphql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
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
    }
  };
