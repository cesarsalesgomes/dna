import InvalidateKeys from '$enums/invalidate-keys.enum.js';

import BirdsRepository from './repository/birds.repository.js';

export const prerender = 'auto';

export const load = async ({ locals, depends, isDataRequest }) => {
  depends(InvalidateKeys.Birds);

  const birds = BirdsRepository.getBirds(locals.directusPayload);

  return {
    streamed: {
      birds$: isDataRequest ? birds : await birds,
    },
  };
};
