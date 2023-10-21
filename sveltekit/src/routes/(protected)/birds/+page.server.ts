import { readItems } from '@directus/sdk';

import InvalidateKeys from '$enums/invalidate-keys.enum.js';
import { DirectusServerSdk } from '$lib/directus/directus.sdk.js';

export const prerender = 'auto';

export const load = async ({ locals, depends, isDataRequest }) => {
  const { accessToken } = locals;

  depends(InvalidateKeys.Birds);

  const birds = DirectusServerSdk.request(readItems('bird', { fields: ['id', 'name'] }), accessToken);

  return {
    streamed: {
      birds$: isDataRequest ? birds : await birds,
    },
  };
};
