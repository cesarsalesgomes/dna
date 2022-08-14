import { NavigateToLogin } from '@features/login';
import { useAtom } from 'jotai';

import { accessTokenAtom, userIdAtom } from '../atoms';
import { checkAccessTokenInLocalStorage, checkAccessTokenInMemory } from '../utils/auth.utils';

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [userId, setUserId] = useAtom(userIdAtom);

  if (
    checkAccessTokenInMemory(setUserId, userId, accessToken) ||
    checkAccessTokenInLocalStorage(setAccessToken, setUserId, userId)
  ) {
    return (<div>{children}</div>);
  }

  return <NavigateToLogin />;
}