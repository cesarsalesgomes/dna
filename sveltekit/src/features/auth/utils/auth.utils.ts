import type { AuthenticationData } from '@directus/sdk';
import { get } from 'svelte/store';

import { HOME_ROUTE, LOGIN_ROUTE } from '$constants/route.constants';
import type DirectusPayload from '$interfaces/directus-payload.interface';

import { accessTokenStore, userIdStore } from '../stores';

import {
  getAccessTokenFromCookie, removeAccessTokenFromCookie, setCookieWithAccessToken,
} from './cookie.utils';

import { goto } from '$app/navigation';

export function getPayloadFromAccessToken(accessToken: string): DirectusPayload {
  return JSON.parse(atob(accessToken.split('.')[1]));
}

function setAccessTokenAndUserOnPayloadToStore(accessToken: string) {
  accessTokenStore.set(accessToken);
  userIdStore.set(getPayloadFromAccessToken(accessToken).id);
}

function navigateToHome() {
  goto(HOME_ROUTE);
}

export function authLoginHandler(data: AuthenticationData | null) {
  if (data && data.access_token) {
    const { access_token: accessToken } = data;

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

export function checkAccessTokenExpired({ exp }: DirectusPayload): boolean {
  const currentEpochTimeInSeconds = Date.now();

  return currentEpochTimeInSeconds > (exp * 1000);
}
