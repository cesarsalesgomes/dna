import LoadingOnFetching from '@components/loading-on-fetching.component';
import Loading from '@components/loading.component';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    // A surrounding 'div' is necessary because of the Loading component
    // css 'absolute' position; without it, would override the navbar menu. 
    <div className="flex flex-col">
      <Suspense fallback={<Loading />} >
        <LoadingOnFetching />
        <div className="px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-60">
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
}