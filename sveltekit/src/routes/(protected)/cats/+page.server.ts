import { readItems } from '@directus/sdk';

import InvalidateKeys from '$enums/invalidate-keys.enum.js';
import { DirectusServerSdk } from '$lib/directus/directus.sdk.js';

export const prerender = 'auto';

export const load = async ({ locals, depends, isDataRequest }) => {
  const { accessToken } = locals;

  depends(InvalidateKeys.Cats);

  const cats = DirectusServerSdk.request(readItems('cat', { fields: ['id', 'name'] }), accessToken);

  return {
    streamed: {
      cats$: isDataRequest ? cats : await cats,
    },
  };
};
