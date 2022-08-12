import { NavigateToLogin } from '@features/login';
import { useState } from 'react';

import AuthContextProvider from '../providers/auth.provider';
import { getAccessTokenFromLocalStorage } from '../utils/storage.utils';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const [accessToken, setAccessToken] = useState<string>('');

  if (accessToken) return AuthContextProvider(accessToken, children);

  const accessTokenFromLocalStorage = getAccessTokenFromLocalStorage();

  if (accessTokenFromLocalStorage) {
    setAccessToken(accessTokenFromLocalStorage);

    return AuthContextProvider(accessTokenFromLocalStorage, children);
  };

  return <NavigateToLogin />;
}