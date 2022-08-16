import ReactQueryStatusEnum from '@enums/react-query-status.enum';
import { CatByIdQuery, useCatByIdQuery } from '@hooks/cat.hooks';
import ReactQueryProps from '@interfaces/react-query-props.interface';
import { Dispatch, SetStateAction } from 'react';

import './Cat.css';

function ShowErrorOrCat({ status, error, isFetching, data }: ReactQueryProps<CatByIdQuery>) {
  return status === ReactQueryStatusEnum.Error ? (
    <span>Error: {error!.message}</span>
  ) : (
      <div className="prose dark:prose-invert">
        <h1>{data?.cat_by_id?.name}</h1>
        <div>{isFetching ? 'Background Updating...' : ' '}</div>
      </div>
    );
}

function Cat({ catId, setCatId }: { catId: number; setCatId: Dispatch<SetStateAction<number>> }) {
  const { status, data, error, isFetching } = useCatByIdQuery({ data: `${catId}` });

  return (
    <div className="prose dark:prose-invert">
      <div>
        <button type="button" className="button" onClick={() => setCatId(-1)}>
          Back
        </button>
      </div>
      {!catId || status === ReactQueryStatusEnum.Loading ? (
        'Loading...'
      ) : <ShowErrorOrCat status={status} error={error} isFetching={isFetching} data={data} />}
    </div>
  );
}

export default Cat;