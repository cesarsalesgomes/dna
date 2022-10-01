import { lazy } from 'react';

const HomeRoutes = lazy(() => import('../routes/home.routes'));
const RequireAuth = lazy(() => import('@features/auth/components/require-auth.component'));

export default function Home() {
  return (
    <RequireAuth>
      <HomeRoutes />
    </RequireAuth>
  );
}