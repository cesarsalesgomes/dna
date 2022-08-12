import { useLocation, useNavigate, NavigateFunction, Location } from 'react-router-dom';

interface StateLocation {
  from?: {
    pathname: string
  }
}

function sendBackToLastPageTriedToVisit(navigate: NavigateFunction, location: Location) {
  return () => {
    const from = (location.state as StateLocation)?.from?.pathname || '/';

    navigate(from, { replace: true });
  };
}

export default function useNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  return {
    sendBackToLastPageTriedToVisit: sendBackToLastPageTriedToVisit(navigate, location),
    navigate
  };
}