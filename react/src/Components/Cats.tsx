import { Dispatch, SetStateAction } from 'react';
import { FindAllCatsQuery, useFindAllCatsQuery } from '../directus.hooks';
import ReactQueryStatusEnum from '../Enums/ReactQueryStatus';
import ReactQueryProps from '../Interfaces/ReactQueryProps';
import QueryClientSingleton from '../Singletons/QueryClient';

const queryClient = QueryClientSingleton.getInstance();

interface IShowErrorOrCats extends ReactQueryProps<FindAllCatsQuery> {
  setCatId: Dispatch<SetStateAction<number>>
}

function ShowErrorOrCats(
  { status, error, isFetching, data, setCatId }: IShowErrorOrCats) {
  return status === 'error' ? (
    <span>Error: {error!.message}</span>
  ) : (
      <>
        <div>
          {data!.cat!.map((post) => (
            <p key={post!.id}>
              <button
                type="button"
                onClick={() => setCatId(Number(post!.id))}
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
              </button>
            </p>
          ))}
        </div>
        <div>{isFetching ? 'Background Updating...' : ' '}</div>
      </>
    )
}

function Cats({ setCatId }: { setCatId: Dispatch<SetStateAction<number>> }) {
  const { status, data, error, isFetching } = useFindAllCatsQuery({});

  return (
    <div>
      <h1>Cats</h1>
      <div>
        {status === ReactQueryStatusEnum.Loading ? (
          'Loading...'
        ) : <ShowErrorOrCats status={status} error={error} isFetching={isFetching} data={data} setCatId={setCatId} />}
      </div>
    </div>
  );
}

export default Cats;