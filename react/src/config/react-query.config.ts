/**
 * Custom fetchers used by React Query Codegen (https://www.graphql-code-generator.com/plugins/typescript-react-query)
 */

export const fetchParams = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer '
  }
};

// Graphql Fetcher

const graphqlUrl = 'http://localhost/graphql';

export function graphqlFetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(graphqlUrl, {
      method: 'POST',
      ...(fetchParams),
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      throw json.errors[0];
    }

    return json.data;
  };
}

// Graphql System Fetcher

const graphqlSystemUrl = 'http://localhost/graphql/system';

export function graphqlSystemFetcher<TData, TVariables>(query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(graphqlSystemUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      throw json.errors[0];
    }

    return json.data;
  };
}
