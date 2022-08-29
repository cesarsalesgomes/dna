import { useIsFetching, useIsMutating } from '@tanstack/react-query';

import Loading from './loading.component';

export default function LoadingOnFetching() {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return (
    (isFetching || isMutating) ? <Loading /> : <div />
  );
}
