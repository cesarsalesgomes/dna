import { NavigateToLogin } from 'src/components';

import { getAccessToken, setAuthorizationHeader } from '../utils/token.utils';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const accessToken = getAccessToken();

  if (!(accessToken)) return <NavigateToLogin />;

  setAuthorizationHeader(accessToken);

  return children;
}