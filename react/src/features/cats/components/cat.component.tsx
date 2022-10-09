import { Link, useParams } from 'react-router-dom';

import useFindCatById from '../hooks/find-cat-by-id.hook';

function Cat() {
  const { catId } = useParams();
  const { data } = useFindCatById({ id: Number(catId) });

  return (
    <div className="prose mt-4 dark:prose-invert">
      <Link to="/cats">
        <button type="button" >
          Back
        </button>
      </Link>
      <h1>{data?.name}</h1>
    </div>
  );
}

export default Cat;