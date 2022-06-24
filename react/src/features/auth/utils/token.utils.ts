/* eslint-disable @typescript-eslint/naming-convention */
import { fetchParams } from '@config/react-query.config';
import { AuthLoginMutation } from '@hooks/auth.hooks';

const accessTokenLocalStorageKey = 'dna-access-token';

function setAccessTokenToLocalStorage(accessToken: string) {
  localStorage.setItem(accessTokenLocalStorageKey, accessToken);
}

export function setAuthorizationHeader(accessToken: string) {
  fetchParams.headers.Authorization = `Bearer ${accessToken}`;
}

export function getAccessToken() {
  return localStorage.getItem(accessTokenLocalStorageKey);
}

export function setAccessToken(tokens: AuthLoginMutation) {
  const access_token = tokens?.auth_login?.access_token || '';

  setAccessTokenToLocalStorage(access_token);
  setAuthorizationHeader(access_token);
}