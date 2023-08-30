import { readItems } from '@directus/sdk';

export const load = ({ locals }) => {
  const { directusAuthClient } = locals;

  return {
    streamed: {
      cats$: directusAuthClient.request(readItems('cat', { fields: ['id', 'name'] })),
    },
  };
};
