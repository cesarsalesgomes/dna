import { Home } from '@features/home';
import { LoginRoutes } from '@features/login';
import { Route, Routes } from 'react-router-dom';

// TODO: add NotFound route -> <Route path="*" element={<NotFound />} />

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login/*" element={<LoginRoutes />} />
    </Routes>
  );
} 