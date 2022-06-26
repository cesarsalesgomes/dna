import { useErrorHandler } from 'react-error-boundary';

/**
 * Custom fetchers used by React Query Codegen (https://www.graphql-code-generator.com/plugins/typescript-react-query)
 */

// FIXME: store access token as a context hook (Example in the link above)
export const fetchParams = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer '
  }
};

// Graphql Fetcher

const graphqlUrl = 'http://localhost/graphql';

export const useGraphqlFetcher = <TData, TVariables>(
  query: string, options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  const handleError = useErrorHandler();

  return async (variables?: TVariables): Promise<TData> => {
    const res = await fetch(graphqlUrl, {
      method: 'POST',
      ...(fetchParams),
      ...(options ?? {}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      return handleError(json.errors[0]) as any;
    }

    return json.data;
  };
};

// Graphql System Fetcher

const graphqlSystemUrl = 'http://localhost/graphql/system';

export const useGraphqlSystemFetcher = <TData, TVariables>(
  query: string, options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  const handleError = useErrorHandler();

  return async (variables?: TVariables): Promise<TData> => {
    const res = await fetch(graphqlSystemUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...(options ?? {}),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      return handleError(json.errors[0]) as any;
    }

    return json.data;
  };
};
