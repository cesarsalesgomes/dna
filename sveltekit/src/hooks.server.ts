/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { redirect, type Handle, type Cookies } from '@sveltejs/kit';

import { accessTokenCookieName } from '$constants/auth.constants';
import { LOGIN_ROUTE } from '$constants/route.constants';
import { getAuthenticatedUserIdFromAccessToken } from '$features/auth/utils';
import { DirectusRestClient } from '$lib/directus';

function checkOnLoginRoute({ pathname }: URL): boolean {
  return pathname === LOGIN_ROUTE;
}

function getAccessTokenFromCookiesEvent(cookies: Cookies) {
  return cookies.get(accessTokenCookieName);
}

export const handle: Handle = async ({ event, resolve }) => {
  if (!checkOnLoginRoute(event.url)) {
    const accessToken = getAccessTokenFromCookiesEvent(event.cookies);

    if (!accessToken) throw redirect(303, LOGIN_ROUTE);

    const userId = getAuthenticatedUserIdFromAccessToken(accessToken);

    event.locals = {
      directusAuthClient: DirectusRestClient.getAuthenticatedClient(accessToken),
      userId,
    };
  }

  return resolve(event);
};
