import { readItems } from '@directus/sdk';

import InvalidateKeys from '$enums/invalidate-keys.enum.js';
import { DirectusServerSdk } from '$lib/directus/directus.sdk.js';

export const load = ({ locals, depends }) => {
  const { accessToken } = locals;

  depends(InvalidateKeys.Cats);

  return {
    streamed: {
      cats$: DirectusServerSdk.request(readItems('cat', { fields: ['id', 'name'] }), accessToken),
    },
  };
};
