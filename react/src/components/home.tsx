import { RequireAuth } from '@features/auth';
import { Menu } from '@features/menu';

import { ErrorBoundary } from '.';

export default function Home() {
  return (
    <RequireAuth>
      <ErrorBoundary>
        <Menu />
      </ErrorBoundary>
    </RequireAuth>
  );
}