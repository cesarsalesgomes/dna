import { RequireAuth } from '@features/auth';
import { Menu } from '@features/menu';

export default function Home() {
  return (
    <RequireAuth>
      <Menu />
    </RequireAuth>
  );
}