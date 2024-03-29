import { RequireAuth } from '@features/auth';
import { lazy, Suspense } from 'react';

const LoadingLayout = lazy(() => import('@components/loading/loading-layout.component'));
const HomeRoutes = lazy(() => import('../routes/home.routes'));

export default function Home() {
  return (
    <Suspense fallback={<LoadingLayout />}>
      <RequireAuth>
        <HomeRoutes />
      </RequireAuth>
    </Suspense>
  );
}