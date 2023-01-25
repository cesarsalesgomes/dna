import { accessTokenStore } from '../stores';

import { setAccessTokenToLocalStorage } from './storage.utils';

export function authLoginHandler(accessToken: string) {
  if (accessToken) {
    accessTokenStore.set(accessToken);
    setAccessTokenToLocalStorage(accessToken);
  }
}
