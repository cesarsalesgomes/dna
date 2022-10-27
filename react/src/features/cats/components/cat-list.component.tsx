import { FindAllCatsQuery, useFindAllCatsQuery } from '@hooks/cat.hooks';
import QueryClientSingleton from '@providers/react-query-client.provider';
import { Link } from 'react-router-dom';

import CatCreate from './cat-create.component';

const queryClient = QueryClientSingleton.getInstance();

function ShowCats({ data }: { data: FindAllCatsQuery }) {
  const { cat } = data;

  return cat.length > 0 ? (
    <>
      {cat.map((item) => (
        <div key={item!.id}>
          <Link to={`/cats/${item.id}`}>
            <button
              type="button"
              className={`p-2 ${queryClient.getQueryData(['findCatById', item!.id]) ? 'text-primary-700' : ''}`}
            >
              {item!.name}
            </button>
          </Link>
        </div>
      ))}
    </>
  ) : <h2>No cats</h2>;
}

function Cats() {
  const { data } = useFindAllCatsQuery();

  return (
    <div className="prose flex flex-col dark:prose-invert">
      <h1 className="my-4">Cats</h1>
      <CatCreate />
      {data ? <ShowCats data={data} /> : <h2>No cats</h2>}
    </div>
  );
}

export default Cats;