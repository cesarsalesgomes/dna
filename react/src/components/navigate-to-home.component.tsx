import { HOME_ROUTE } from '@constants/route.constants';
import { Navigate } from 'react-router-dom';

export default function NavigateToHome() {
  return (
    <Navigate to={`/${HOME_ROUTE}`} />
  );
}