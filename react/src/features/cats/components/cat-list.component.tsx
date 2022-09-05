import ReactQueryStatusEnum from '@enums/react-query-status.enum';
import { FindAllCatsQuery, useFindAllCatsQuery } from '@hooks/cat.hooks';
import ReactQueryProps from '@interfaces/react-query-props.interface';
import QueryClientSingleton from '@providers/query-client.provider';
import { Dispatch, SetStateAction } from 'react';

import CatCreate from './cat-create.component';

const queryClient = QueryClientSingleton.getInstance();

interface IShowCats extends ReactQueryProps<FindAllCatsQuery> {
  setCatId: Dispatch<SetStateAction<number>>
}

function ShowCats({ isFetching, data, setCatId }: IShowCats) {
  return data && data?.cat ? (
    <>
      <div>
        {data.cat.map((cat) => (
          <p key={cat!.id}>
            <button
              type="button"
              className="bg-cyan-800 p-2"
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
  ) : <div>No cats</div>;
}

function Cats({ setCatId }: { setCatId: Dispatch<SetStateAction<number>> }) {
  const { status, data, isFetching } = useFindAllCatsQuery({});

  return (
    <div className="prose flex flex-col dark:prose-invert">
      <h1 className="my-4">Cats</h1>
      <CatCreate />
      <div>
        {status === ReactQueryStatusEnum.Loading ? (
          'Loading...'
        ) : <ShowCats isFetching={isFetching} data={data} setCatId={setCatId} />}
      </div>
    </div>
  );
}

export default Cats;