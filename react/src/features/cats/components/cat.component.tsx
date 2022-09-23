import ReactQueryStatusEnum from '@enums/react-query-status.enum';
import { Cat as CatType } from '@hooks/cat.hooks';
import ReactQueryProps from '@interfaces/react-query-props.interface';
import { Dispatch, SetStateAction } from 'react';

import useFindCatById from '../hooks/find-cat-by-id.hook';

function ShowErrorOrCat({ status, error, data }: ReactQueryProps<CatType>) {
  return status === ReactQueryStatusEnum.Error ? (
    <span>Error: {error!.message}</span>
  ) : (
    <div className="prose dark:prose-invert">
      <h1>{data?.name}</h1>
    </div>
  );
}

function Cat({ catId, setCatId }: { catId: number; setCatId: Dispatch<SetStateAction<number>> }) {
  const { status, data, error } = useFindCatById({ id: catId });

  return (
    <div className="prose dark:prose-invert">
      <div>
        <button type="button" onClick={() => setCatId(-1)}>
          Back
        </button>
      </div>
      {!catId || status === ReactQueryStatusEnum.Loading ? (
        'Loading...'
      ) : <ShowErrorOrCat status={status} error={error} data={data} />}
    </div>
  );
}

export default Cat;