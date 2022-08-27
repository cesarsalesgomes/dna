import NavigateToHome from '@components/navigate-to-home.component';
import { RequireAuth } from '@features/auth';
import { Birds } from '@features/birds';
import { CatsCondition } from '@features/cats';
import { Menu } from '@features/menu';
import { Route, Routes } from 'react-router-dom';

export default function Home() {
  return (
    <RequireAuth>
      <Routes>
        <Route path="/" element={<Menu />} >
          <Route path="cats" element={<CatsCondition />} />
          <Route path="birds" element={<Birds />} />
          <Route path="/*" element={<NavigateToHome />} />
        </Route>
      </Routes>
    </RequireAuth>
  );
}