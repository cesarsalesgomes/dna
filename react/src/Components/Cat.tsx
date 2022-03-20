import { Dispatch, SetStateAction } from 'react';
import { CatByIdQuery, useCatByIdQuery } from '../directus.hooks';
import ReactQueryStatusEnum from '../Enums/ReactQueryStatus';
import ReactQueryProps from '../Interfaces/ReactQueryProps';

function ShowErrorOrCat({ status, error, isFetching, data }: ReactQueryProps<CatByIdQuery>) {
  return status === ReactQueryStatusEnum.Error ? (
    <span>Error: {error!.message}</span>
  ) : (
      <>
        <h1>{data?.cat_by_id?.name}</h1>
        <div>{isFetching ? 'Background Updating...' : ' '}</div>
      </>
    );
}

function Cat({ catId, setCatId }: { catId: number; setCatId: Dispatch<SetStateAction<number>> }) {
  const { status, data, error, isFetching } = useCatByIdQuery({ data: `${catId}` });

  return (
    <div>
      <div>
        <button type="button" onClick={() => setCatId(-1)}>
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