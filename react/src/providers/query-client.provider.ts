import { QueryClient } from 'react-query';

export default class QueryClientSingleton {
  static instance: QueryClient;

  public static getInstance(): QueryClient {
    if (!QueryClientSingleton.instance) {
      QueryClientSingleton.instance = new QueryClient();
    }

    return QueryClientSingleton.instance;
  }
}