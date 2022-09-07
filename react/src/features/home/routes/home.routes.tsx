import NavigateToHome from '@components/navigate-to-home.component';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import MenuLayout from '../components/menu-layout.component';

const Cats = lazy(() => import('@features/cats/components/cats-condition.component'));
const Birds = lazy(() => import('@features/birds/components/birds.component'));

export default function HomeRoutes() {
  // TODO: wildcard path (/*) navigate to NotFound page
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />} >
        <Route index element={<NavigateToHome />} />
        <Route path="cats" element={<Cats />} />
        <Route path="birds" element={<Birds />} />
        <Route path="/*" element={<NavigateToHome />} />
      </Route>
    </Routes>
  );
}