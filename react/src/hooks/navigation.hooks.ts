import { useLocation, useNavigate } from 'react-router-dom';

interface StateLocation {
  from?: {
    pathname: string
  }
}

export function useSendBackToLastPageTriedToVisit() {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    const from = (location.state as StateLocation)?.from?.pathname || '/';

    navigate(from, { replace: true });
  };
}
