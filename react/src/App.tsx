import Cat from '@features/cats/cat';
import Cats from '@features/cats/cat-list';
import QueryClientSingleton from '@providers/QueryClient';
import { useState } from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = QueryClientSingleton.getInstance();

export default function App() {
  const [catId, setCatId] = useState(-1);

  return (
    <QueryClientProvider client={queryClient}>
      <p>
        As you visit the posts below, you will notice them in a loading state
        the first time you load them. However, after you return to this list and
        click on any posts you have already visited again, you will see them
        load instantly and background refresh right before your eyes!{' '}
        <strong>
          (You may need to throttle your network speed to simulate longer
          loading sequences)
        </strong>
      </p>
      {catId > -1 ? (
        <Cat catId={catId} setCatId={setCatId} />
      ) : (
          <Cats setCatId={setCatId} />
        )}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
