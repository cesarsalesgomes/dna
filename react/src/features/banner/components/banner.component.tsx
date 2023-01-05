import { useAtom } from 'jotai';
import { lazy, Suspense } from 'react';

import { bannerMessageAtom } from '../atoms';

const BannerMessage = lazy(() => import('./banner-message.component'));

export default function Banner() {
  const [bannerMessage] = useAtom(bannerMessageAtom);

  return (
    bannerMessage ?
      <Suspense> <BannerMessage message={bannerMessage} /></Suspense> :
      <div />
  );
}
