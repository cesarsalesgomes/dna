import { accessTokenStore } from '../stores';

import { setCookieWithAccessToken } from './cookie.utils';

export function authLoginHandler(accessToken: string | null) {
  if (accessToken) {
    accessTokenStore.set(accessToken);
    setCookieWithAccessToken(accessToken);
  }
}
