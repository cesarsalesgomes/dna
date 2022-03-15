/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useCatByIdQuery, useFindAllCatsQuery } from './directus.hooks';

const queryClient = new QueryClient();

export function App() {
  const [postId, setPostId] = React.useState(-1);

  return (
    <QueryClientProvider client={queryClient}>
      <p>
        As you visit the posts below, you will notice them in a loading state the first time you load them. However, after you return to
        this list and click on any posts you have already visited again, you will see them load instantly and background refresh right
        before your eyes! <strong>(You may need to throttle your network speed to simulate longer loading sequences)</strong>
      </p>
      {postId > -1 ? <Post postId={postId} setPostId={setPostId} /> : <Posts setPostId={setPostId} />}
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

function Posts({ setPostId }) {
  const queryClient = useQueryClient();
  const { status, data, error, isFetching } = useFindAllCatsQuery();

  return (
    <div>
      <h1>Posts</h1>
      <div>
        {status === 'loading' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
              <>
                <div>
                  {data!.cat!.map((post) => (
                    <p key={post!.id}>
                      <a
                        onClick={() => setPostId(post!.id)}
                        href="#"
                        style={
                          // We can find the existing query data here to show bold links for
                          // ones that are cached
                          queryClient.getQueryData(['post', post!.id])
                            ? {
                              fontWeight: 'bold',
                              color: 'green',
                            }
                            : {}
                        }
                      >
                        {post!.name}
                      </a>
                    </p>
                  ))}
                </div>
                <div>{isFetching ? 'Background Updating...' : ' '}</div>
              </>
            )}
      </div>
    </div>
  );
}

function Post({ postId, setPostId }) {
  const { status, data, error, isFetching } = useCatByIdQuery(postId);

  return (
    <div>
      <div>
        <a onClick={() => setPostId(-1)} href="#">
          Back
        </a>
      </div>
      {!postId || status === 'loading' ? (
        'Loading...'
      ) : status === 'error' ? (
        <span>Error: {error.message}</span>
      ) : (
            <>
              <h1>{data.name}</h1>
              <div>{isFetching ? 'Background Updating...' : ' '}</div>
            </>
          )}
    </div>
  );
}
