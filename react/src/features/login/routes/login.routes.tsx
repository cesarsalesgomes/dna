import { Route, Routes } from 'react-router-dom';

import { Login } from '../components';

export default function LoginRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
}