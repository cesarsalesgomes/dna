import { readItems } from '@directus/sdk';

import { DirectusServerSdk } from '$lib/directus/directus.sdk.js';

export const load = ({ locals }) => {
  const { accessToken } = locals;

  return {
    streamed: {
      cats$: DirectusServerSdk.request(readItems('cat', { fields: ['id', 'name'] }), accessToken),
    },
  };
};
