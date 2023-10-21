import { readMe } from '@directus/sdk';

import { DirectusServerSdk } from '$lib/directus/directus.sdk';
import type { DirectusUsers } from '$types/directus-schema.type';

export const prerender = 'auto';

export const load = async ({ locals, isDataRequest }) => {
  const { accessToken } = locals;

  const me = DirectusServerSdk.request(readMe({ fields: ['avatar', 'first_name', 'last_name'] }), accessToken);

  return {
    streamed: {
      me$: (isDataRequest ? me : await me) as Promise<DirectusUsers>,
    },
    accessToken,
  };
};
