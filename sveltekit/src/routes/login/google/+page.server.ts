import { redirect } from '@sveltejs/kit';

import { REFRESH_TOKEN_COOKIE_NAME, REFRESH_TOKEN_COOKIE_OPTIONS, ACCESS_TOKEN_COOKIE_NAME } from '$constants/auth.constants.js';
import { HOME_ROUTE } from '$constants/route.constants.js';
import { DirectusServerSdk } from '$lib/directus/directus.sdk.js';

export const load = async ({ cookies }) => {
  const { access_token: accessToken } = await DirectusServerSdk.googleLogin(cookies.get(REFRESH_TOKEN_COOKIE_NAME));

  cookies.set(ACCESS_TOKEN_COOKIE_NAME, accessToken ?? '', REFRESH_TOKEN_COOKIE_OPTIONS);

  throw redirect(303, HOME_ROUTE);
};
