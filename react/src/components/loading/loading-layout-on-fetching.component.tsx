import { fetchesBeingPerformedAtom } from '@atoms/fetches-being-performed.atom';
import { useAtom } from 'jotai';

import LoadingLayout from './loading-layout.component';

export default function LoadingLayoutOnFetching() {
  const [fetchesBeingPerformed] = useAtom(fetchesBeingPerformedAtom);

  return (
    (fetchesBeingPerformed > 0) ? <LoadingLayout isSuspense={false} /> : <div />
  );
}
