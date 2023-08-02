/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { redirect, type Handle, type Cookies } from '@sveltejs/kit';

import { accessTokenCookieName } from '$constants/auth.constants';
import { LOGIN_ROUTE } from '$constants/route.constants';
import { getAuthenticatedUserIdFromAccessToken } from '$features/auth/utils';

function checkOnLoginRoute({ pathname }: URL): boolean {
  return pathname === LOGIN_ROUTE;
}

function getAccessTokenFromCookiesEvent(cookies: Cookies) {
  return cookies.get(accessTokenCookieName);
}

export const handle: Handle = async ({ event, resolve }) => {
  if (!checkOnLoginRoute(event.url)) {
    const userId = getAuthenticatedUserIdFromAccessToken(getAccessTokenFromCookiesEvent(event.cookies));

    if (!userId) throw redirect(303, LOGIN_ROUTE);

    event.locals.userId = userId;
  }

  return resolve(event);
};
