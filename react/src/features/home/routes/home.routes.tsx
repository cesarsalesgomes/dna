import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const MenuLayout = lazy(() => import('../components/menu-layout.component'));
const NavigateToHome = lazy(() => import('@components/navigate-to-home.component'));
const Cats = lazy(() => import('@features/cats/components/cat-list.component'));
const Cat = lazy(() => import('@features/cats/components/cat.component'));
const Birds = lazy(() => import('@features/birds/components/birds.component'));
const NotFound = lazy(() => import('@features/info/components/not-found.component'));

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MenuLayout />} >
        <Route index element={<NavigateToHome />} />
        <Route path="cats" element={<Cats />} />
        <Route path="cats/:catId" element={<Cat />} />
        <Route path="birds" element={<Birds />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}