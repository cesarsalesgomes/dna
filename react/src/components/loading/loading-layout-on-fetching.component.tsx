import { useIsFetching, useIsMutating } from '@tanstack/react-query';

import LoadingLayout from './loading-layout.component';

export default function LoadingLayoutOnFetching() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    (isFetching || isMutating) ? <LoadingLayout /> : <div />
  );
}
