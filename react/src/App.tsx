import Loading from '@components/loading.component';
import Banner from '@features/banner/components/banner.component';
import CatsCondition from '@features/cats/cats-condition';
import { ErrorBoundary } from '@features/error-boundary';
import { Home } from '@features/home';
import { Login, NavigateToLogin } from '@features/login';
import QueryClientSingleton from '@providers/query-client.provider';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';

const queryClient = QueryClientSingleton.getInstance();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <Banner />
        <Loading />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="cats" element={<CatsCondition />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="navigate-to-login" element={<NavigateToLogin />} />
        </Routes>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
