import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { SetStateAction } from 'react';

import { getAccessTokenFromLocalStorage } from './storage.utils';

export function getPayloadFromAccessToken(accessToken: string): { id: string } {
  try {
    return JSON.parse(atob(accessToken.split('.')[1]));
  } catch (error) {
    throw new Error(UNEXPECTED_ERROR_NOTIFICATION);
  }
}

export function checkAccessTokenInMemory(
  setUserId: (update: SetStateAction<string>) => void, userId?: string, accessToken?: string,
): boolean {
  if (accessToken) {
    if (!userId) setUserId(getPayloadFromAccessToken(accessToken).id);

    return true;
  }

  return false;
}

export function checkAccessTokenInLocalStorage(
  setAccessToken: (update: SetStateAction<string>) => void,
  setUserId: (update: SetStateAction<string>) => void,
  userId?: string
) {
  const accessTokenFromLocalStorage = getAccessTokenFromLocalStorage();

  if (accessTokenFromLocalStorage) {
    setAccessToken(accessTokenFromLocalStorage);

    if (!userId) setUserId(getPayloadFromAccessToken(accessTokenFromLocalStorage).id);

    return true;
  };

  return false;
}