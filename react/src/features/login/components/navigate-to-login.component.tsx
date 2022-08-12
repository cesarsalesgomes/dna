import { Navigate, useLocation } from 'react-router-dom';

// Redirect them to the /login page, but save the current location they were
// trying to go to when they were redirected. This allows us to send them
// along to that page after they login, which is a nicer user experience
// than dropping them off on the home page.
export default function NavigateToLogin() {
  const location = useLocation();

  return (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}