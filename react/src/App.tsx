import Home from '@components/home';
import Cat from '@features/cats/cat';
import Cats from '@features/cats/cat-list';
import { Login } from '@features/login';
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
        <Route path="/" element={<Home />}>
          <Route path="cats" element={<CatsCondition />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
