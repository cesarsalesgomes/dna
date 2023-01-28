import { navigate } from 'svelte-routing';

import { accessTokenStore, userIdStore } from '../stores';

import { getAccessTokenFromLocalStorage, setAccessTokenToLocalStorage } from './storage.utils';

function getPayloadFromAccessToken(accessToken: string): { id: string } {
  return JSON.parse(atob(accessToken.split('.')[1]));
}

function setAccessTokenAndUserOnPayloadToStore(accessToken: string) {
  accessTokenStore.set(accessToken);
  userIdStore.set(getPayloadFromAccessToken(accessToken).id);
}

function navigateToHome() {
  navigate('/', { replace: true });
}

export function authLoginHandler(accessToken: string) {
  if (accessToken) {
    setAccessTokenAndUserOnPayloadToStore(accessToken);
    setAccessTokenToLocalStorage(accessToken);
    navigateToHome();
  }
}

export function navigateToLoginIfUserNotAuthenticated() {
  accessTokenStore.subscribe((accessToken) => {
    if (accessToken) return;

    const accessTokenFromLocalStorage = getAccessTokenFromLocalStorage();

    if (accessTokenFromLocalStorage) {
      setAccessTokenAndUserOnPayloadToStore(accessTokenFromLocalStorage);
    } else {
      navigate('login');
    }
  });
}
