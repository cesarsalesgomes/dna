import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('@features/home/components/home.component'));
const LoginRoutes = lazy(() => import('@features/login/components/login.component'));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login/*" element={<LoginRoutes />} />
    </Routes>
  );
} 