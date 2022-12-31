import { ErrorBoundary } from '@features/error-boundary';
import QueryClientSingleton from '@providers/react-query-client.provider';
import AppRoutes from '@routes/app.routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { lazy, Suspense } from 'react';

const Banner = lazy(() => import('@features/banner/components/banner.component'));
const Notification = lazy(() => import('@features/notification/components/notification.component'));

export default function App() {
  return (
    <QueryClientProvider client={QueryClientSingleton.getInstance()}>
      <ErrorBoundary>
        <Suspense>
          <Banner />
          <Notification />
          <AppRoutes />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
