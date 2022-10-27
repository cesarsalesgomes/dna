import { LoadingLayout } from '@components/loading';
import { ErrorBoundary } from '@features/error-boundary';
import { startHighlightConfiguration } from '@providers/highlight.provider';
import QueryClientSingleton from '@providers/react-query-client.provider';
import AppRoutes from '@routes/app.routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { lazy, Suspense } from 'react';

const Banner = lazy(() => import('@features/banner/components/banner.component'));
const Notification = lazy(() => import('@features/notification/components/notification.component'));

startHighlightConfiguration();

export default function App() {
  return (
    <QueryClientProvider client={QueryClientSingleton.getInstance()}>
      <ErrorBoundary>
        <Suspense fallback={<LoadingLayout />}>
          <Banner />
          <Notification />
          <AppRoutes />
        </Suspense>
      </ErrorBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
