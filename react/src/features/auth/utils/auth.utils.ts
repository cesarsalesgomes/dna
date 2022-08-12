import { UNEXPECTED_ERROR_MESSAGE } from '@constants/message.constants';

export function getPayloadFromAccessToken(accessToken: string): { id: string } {
  try {
    return JSON.parse(atob(accessToken.split('.')[1]));
  } catch (error) {
    throw new Error(UNEXPECTED_ERROR_MESSAGE);
  }
}