import { Route, Routes } from 'react-router-dom';

import { GoogleLogin, Login } from '../components';

export default function LoginRoutes() {
  return (
    <Routes>
      <Route path="/google" element={<GoogleLogin />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}