import { fetchParams } from '@config/react-query.config';
import { AuthLoginMutation } from '@hooks/auth.hooks';

export function setAccessToken(tokens: AuthLoginMutation) {
  fetchParams.headers.Authorization = `Bearer ${tokens?.auth_login?.access_token}`;
}