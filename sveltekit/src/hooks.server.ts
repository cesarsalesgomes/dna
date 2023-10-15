/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { redirect, type Handle, type Cookies } from '@sveltejs/kit';

import { ACCESS_TOKEN_COOKIE_NAME } from '$constants/auth.constants';
import { HOME_ROUTE, LOGIN_ROUTE } from '$constants/route.constants';
import { getAuthenticatedUserIdFromAccessToken } from '$features/auth/utils';

function checkOnLoginRoute({ pathname }: URL): boolean {
  return pathname.includes(LOGIN_ROUTE);
}

function getAccessTokenFromCookiesEvent(cookies: Cookies) {
  return cookies.get(ACCESS_TOKEN_COOKIE_NAME);
}

function redirectToHomeIfNoPathWasPassed({ pathname }: URL): boolean {
  return pathname === '/';
}

export const handle: Handle = async ({ event, resolve }) => {
  const { url } = event;

  if (!checkOnLoginRoute(url)) {
    const accessToken = getAccessTokenFromCookiesEvent(event.cookies);

    if (!accessToken) throw redirect(303, LOGIN_ROUTE);

    const userId = getAuthenticatedUserIdFromAccessToken(accessToken);

    event.locals = {
      accessToken,
      userId,
    };

    if (redirectToHomeIfNoPathWasPassed(url)) {
      return new Response('Redirect', { status: 303, headers: { Location: HOME_ROUTE } });
    }
  }

  return resolve(event);
};

// TODO: Hook with Highlight.io / Add link to redirect to login
// export const handleError: HandleServerError = () => UNEXPECTED_SERVER_ERROR;
