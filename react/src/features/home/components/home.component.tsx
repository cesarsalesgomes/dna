import { RequireAuth } from '@features/auth';

import { HomeRoutes } from '../routes';

export default function Home() {
  return (
    <RequireAuth>
      <HomeRoutes />
    </RequireAuth>
  );
}