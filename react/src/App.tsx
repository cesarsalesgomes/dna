import ErrorBoundary from '@components/error-boundary.component';
import { RequireAuth } from '@features/auth';
import Cat from '@features/cats/cat';
import Cats from '@features/cats/cat-list';
import { Login } from '@features/login';
import { Menu } from '@features/menu';
import QueryClientSingleton from '@providers/query-client.provider';
import { useState } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';

const queryClient = QueryClientSingleton.getInstance();

function CatsCondition() {
  const [catId, setCatId] = useState(-1);

  return (
    catId > -1 ? (
      <Cat catId={catId} setCatId={setCatId} />
    ) : (
        <Cats setCatId={setCatId} />
      )
  );
}

export default function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Menu />}>
          <Route path="/" element={
            <RequireAuth>
              <ErrorBoundary>
                <CatsCondition />
              </ErrorBoundary>
            </RequireAuth>
          } />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
