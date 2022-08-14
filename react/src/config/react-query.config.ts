import { accessTokenAtom } from '@features/auth/atoms';
import useErrorHandler from '@hooks/error-handler.hooks';
import { useAtom } from 'jotai';

/**
 * Custom fetchers used by React Query Codegen (https://www.graphql-code-generator.com/plugins/typescript-react-query)
 */

// Graphql Fetcher

const graphqlUrl = 'http://localhost/graphql';

export const useGraphqlFetcher = <TData, TVariables>(
  query: string, options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  const [accessToken] = useAtom(accessTokenAtom);
  const { reactQueryErrorHandler } = useErrorHandler();

  return async (variables?: TVariables): Promise<TData> => {
    const res = await fetch(graphqlUrl, {
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

    return json.data;
  };
};

// Graphql System Fetcher

const graphqlSystemUrl = 'http://localhost/graphql/system';

export const useGraphqlSystemFetcher = <TData, TVariables>(
  query: string, options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  const { reactQueryErrorHandler } = useErrorHandler();

  return async (variables?: TVariables): Promise<TData> => {
    const res = await fetch(graphqlSystemUrl, {
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

    return json.data;
  };
}; 
