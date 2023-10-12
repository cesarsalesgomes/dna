// eslint-disable-next-line import/no-extraneous-dependencies
import { redirect } from '@sveltejs/kit';

import { HOME_ROUTE } from '$constants/route.constants';

export const prerender = true;

export const load = () => {
  throw redirect(303, HOME_ROUTE);
};
