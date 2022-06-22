import { fetchParams } from '@config/react-query.config';
import Cat from '@features/cats/cat';
import Cats from '@features/cats/cat-list';
import { Login } from '@features/login';
import QueryClientSingleton from '@providers/QueryClient';
import { useState } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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
      {
        !fetchParams.headers.Authorization ? (<Login />) : (<CatsCondition />)
      }

      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
