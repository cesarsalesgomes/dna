import type { CookieSerializeOptions } from 'cookie';

import { dev } from '$app/environment';

export const ACCESS_TOKEN_COOKIE_NAME = 'dna-access-token';

export const REFRESH_TOKEN_COOKIE_NAME = 'directus_refresh_token';

export const REFRESH_TOKEN_COOKIE_OPTIONS: CookieSerializeOptions = {
  path: '/',
  httpOnly: false,
  sameSite: 'strict',
  secure: !dev,
  maxAge: 60 * 60 * 24 * 1, // One day
};
