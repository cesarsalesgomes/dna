import InvalidateKeys from '$enums/invalidate-keys.enum.js';

import CatsRepository from './repository/cats.repository.js';

export const prerender = 'auto';

export const load = async ({ locals, depends, isDataRequest }) => {
  depends(InvalidateKeys.Cats);

  const cats = CatsRepository.getCatsWithFamily(locals.directusPayload);

  return {
    streamed: {
      cats$: isDataRequest ? cats : await cats,
    },
  };
};
