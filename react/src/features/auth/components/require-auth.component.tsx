import { useMemo, useState } from 'react';
import { NavigateToLogin } from 'src/components';

import AuthContext from '../contexts/auth.context';
import AuthContextType from '../types/auth-context.interface';
import { getAccessTokenFromLocalStorage } from '../utils/storage.utils';

function authContextProvider(value: AuthContextType, children: JSX.Element) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const [accessToken, setAccessToken] = useState<string>('');

  const value = useMemo(() => ({ accessToken }), [accessToken]);

  if (accessToken) return authContextProvider(value, children);

  const accessTokenFromLocalStorage = getAccessTokenFromLocalStorage();

  if (accessTokenFromLocalStorage) {
    setAccessToken(accessTokenFromLocalStorage);

    return authContextProvider(value, children);
  };

  return <NavigateToLogin />;
}