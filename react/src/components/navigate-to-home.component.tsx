import { Navigate } from 'react-router-dom';

export default function NavigateToHome() {
  return (
    <Navigate to="/cats" />
  );
}