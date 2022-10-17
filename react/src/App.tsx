import { LoadingLayout } from '@components/loading';
import { ErrorBoundary } from '@features/error-boundary';
import QueryClientSingleton from '@providers/query-client.provider';
import AppRoutes from '@routes/app.routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { lazy, Suspense } from 'react';

const queryClient = QueryClientSingleton.getInstance();

const Banner = lazy(() => import('@features/banner/components/banner.component'));

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingLayout />}>
          <Banner />
          <AppRoutes />
        </Suspense>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
