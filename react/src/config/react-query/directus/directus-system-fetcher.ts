import { DIRECTUS_URL } from '@constants/directus.constants';
import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { useErrorHandler } from '@features/error-handler';

export const useDirectusSystemFetcher = <TData, TVariables>(
  query: string, options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  const { reactQueryErrorHandler, resetReactQueryErrorHandler } = useErrorHandler();

  return async (variables?: TVariables): Promise<TData> => {
    try {
      const res = await fetch(`${DIRECTUS_URL}/graphql/system`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
    }
  };
};
