import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../components';

const GoogleLogin = lazy(() => import('@features/login/components/google-login.component'));

export default function LoginRoutes() {
  return (
    <Routes>
      <Route path="/google" element={<GoogleLogin />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}