import { DIRECTUS_URL } from '@constants/directus.constants';
import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';

import { DirectusRequestOptions } from './directus-config-options';

export const useDirectusSystemFetcher = <TData, TVariables>(query: string):
  ((variables?: TVariables) => Promise<TData>) => async (variables?: TVariables): Promise<TData> => {
    try {
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
        // TODO: send error to error handling instead of throwing
        throw new Error(json.errors[0]);
      }

      return json.data;
    } catch (error) {
      // TODO: send error to error handling instead of throwing
      throw new Error(UNEXPECTED_ERROR_NOTIFICATION);
    }
  };
