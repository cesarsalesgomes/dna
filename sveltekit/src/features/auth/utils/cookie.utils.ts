import Cookies from 'js-cookie';

const accessTokenCookieName = 'dna-access-token';

export function setCookieWithAccessToken(accessToken: string) {
  const daysToExpire = 1;

  Cookies.set(accessTokenCookieName, accessToken, { expires: daysToExpire, sameSite: 'Lax' });
}

export function getAccessTokenFromCookie() {
  return Cookies.get(accessTokenCookieName);
}

export function removeAccessTokenFromCookie() {
  Cookies.remove(accessTokenCookieName);
}
