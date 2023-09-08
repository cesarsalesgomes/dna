// eslint-disable-next-line import/no-extraneous-dependencies
import { get } from 'svelte/store';

import { LOGIN_ROUTE } from '$constants/route.constants';

import { accessTokenStore, userIdStore } from '../stores';

import { getAccessTokenFromCookie, removeAccessTokenFromCookie, setCookieWithAccessToken } from './cookie.utils';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { goto } from '$app/navigation';

function getPayloadFromAccessToken(accessToken: string): { id: string } {
  return JSON.parse(atob(accessToken.split('.')[1]));
}

function setAccessTokenAndUserOnPayloadToStore(accessToken: string) {
  accessTokenStore.set(accessToken);
  userIdStore.set(getPayloadFromAccessToken(accessToken).id);
}

function navigateToHome() {
  goto('/cats');
}

export function getAuthenticatedUserIdFromAccessToken(accessToken: string): string {
  return getPayloadFromAccessToken(accessToken).id;
}

export function authLoginHandler(accessToken?: string | null) {
  if (accessToken) {
    setAccessTokenAndUserOnPayloadToStore(accessToken);
    setCookieWithAccessToken(accessToken);
    navigateToHome();
  }
}

export function logout() {
  removeAccessTokenFromCookie();
  goto(LOGIN_ROUTE);
}

export function getAccessToken() {
  // Check Access Token on Store
  const accessTokenFromStore = get(accessTokenStore);

  if (accessTokenFromStore) return accessTokenFromStore;

  // Check Access Token on Cookies

  const accessTokenFromCookies = getAccessTokenFromCookie();

  if (accessTokenFromCookies) {
    setAccessTokenAndUserOnPayloadToStore(accessTokenFromCookies);

    return accessTokenFromCookies;
  }

  return 'Invalid Token';
}
