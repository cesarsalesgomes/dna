import LoadingSpinner from '@assets/looties/loading-spinner/loading-spinner.lootie';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';

export default function Loading() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    (isFetching || isMutating) ?
      <div className="h-screen w-screen bg-black opacity-25 absolute z-50 flex justify-center items-center">
        <LoadingSpinner style={{ height: '10rem' }} />
      </div> :
      <div />
  );
}
