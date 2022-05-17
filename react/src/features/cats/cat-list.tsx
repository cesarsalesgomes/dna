import ReactQueryStatusEnum from '@enums/react-query-status.enum';
import { FindAllCatsQuery, useFindAllCatsQuery } from '@hooks/cat.hooks';
import ReactQueryProps from '@interfaces/react-query-props.interface';
import QueryClientSingleton from '@providers/QueryClient';
import { Dispatch, SetStateAction } from 'react';

const queryClient = QueryClientSingleton.getInstance();

interface IShowErrorOrCats extends ReactQueryProps<FindAllCatsQuery> {
  setCatId: Dispatch<SetStateAction<number>>
}

function ShowErrorOrCats({ status, error, isFetching, data, setCatId }: IShowErrorOrCats) {
  return status === 'error' ? (
    <span>Error: {error!.message}</span>
  ) : (
      <>
        <div>
          {data!.cat!.map((cat) => (
            <p key={cat!.id}>
              <button
                type="button"
                onClick={() => setCatId(Number(cat!.id))}
                style={
                  // We can find the existing query data here to show bold links for ones that are cached
                  queryClient.getQueryData(['findAllCats', cat!.id])
                    ? {
                      backgroundColor: 'green',
                    }
                    : {}
                }
              >
                {cat!.name}
              </button>
            </p>
          ))}
        </div>
        <div>{isFetching ? 'Background Updating...' : ' '}</div>
      </>
    );
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