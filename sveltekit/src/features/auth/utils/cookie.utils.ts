import Cookies from 'js-cookie';

import { ACCESS_TOKEN_COOKIE_NAME } from '$constants/auth.constants';

export function setCookieWithAccessToken(accessToken: string) {
  const daysToExpire = 1;

  Cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken, { expires: daysToExpire, sameSite: 'Lax' });
}

export function getAccessTokenFromCookie() {
  return Cookies.get(ACCESS_TOKEN_COOKIE_NAME);
}

export function removeAccessTokenFromCookie() {
  Cookies.remove(ACCESS_TOKEN_COOKIE_NAME);
}
