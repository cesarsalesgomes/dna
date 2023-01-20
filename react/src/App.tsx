import { Banner } from '@features/banner';
import { ErrorBoundary } from '@features/error-boundary';
import { Notification } from '@features/notification';
import QueryClientSingleton from '@providers/react-query-client.provider';
import AppRoutes from '@routes/app.routes';
import { QueryClientProvider } from '@tanstack/react-query';

export default function App() {
  return (
    <QueryClientProvider client={QueryClientSingleton.getInstance()}>
      <ErrorBoundary>
        <AppRoutes />
        <Banner />
        <Notification />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
