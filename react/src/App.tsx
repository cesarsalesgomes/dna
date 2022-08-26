import Loading from '@components/loading.component';
import Banner from '@features/banner/components/banner.component';
import { ErrorBoundary } from '@features/error-boundary';
import QueryClientSingleton from '@providers/query-client.provider';
import AppRoutes from '@routes/app.routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = QueryClientSingleton.getInstance();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Banner />
        <Loading />
        <AppRoutes />
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
