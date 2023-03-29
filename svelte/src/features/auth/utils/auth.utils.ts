import { get } from 'svelte/store';

import { navigateToRouteAndSetCurrentRouteStore } from '@utils/router.utils';

import { accessTokenStore, userIdStore } from '../stores';

import { getAccessTokenFromLocalStorage, removeAccessTokenFromLocalStorage, setAccessTokenToLocalStorage } from './storage.utils';

function getPayloadFromAccessToken(accessToken: string): { id: string } {
  return JSON.parse(atob(accessToken.split('.')[1]));
}

function setAccessTokenAndUserOnPayloadToStore(accessToken: string) {
  accessTokenStore.set(accessToken);
  userIdStore.set(getPayloadFromAccessToken(accessToken).id);
}

function navigateToHome() {
  navigateToRouteAndSetCurrentRouteStore('/', true);
}

export function authLoginHandler(accessToken: string) {
  if (accessToken) {
    setAccessTokenAndUserOnPayloadToStore(accessToken);
    setAccessTokenToLocalStorage(accessToken);
    navigateToHome();
  }
}

export function navigateToLoginIfUserNotAuthenticated(): string {
  // Check Access Token on Store
  const accessTokenFromStore = get(accessTokenStore);

  if (accessTokenFromStore) return accessTokenFromStore;

  // Check Access Token on Localstorage
  const accessTokenFromLocalStorage = getAccessTokenFromLocalStorage();

  if (accessTokenFromLocalStorage) {
    setAccessTokenAndUserOnPayloadToStore(accessTokenFromLocalStorage);

    return accessTokenFromLocalStorage;
  }

  // User not authenticated
  navigateToRouteAndSetCurrentRouteStore('/login', true);

  return null;
}

export function logout() {
  removeAccessTokenFromLocalStorage();
  accessTokenStore.set('');
  navigateToRouteAndSetCurrentRouteStore('/login', true);
}
