import { Route, Routes } from 'react-router-dom';

import { Login, NavigateToLogin } from '../components';

export default function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/navigate" element={<NavigateToLogin />} />
    </Routes>
  );
}