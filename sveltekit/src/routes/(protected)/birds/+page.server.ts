import InvalidateKeys from '$enums/invalidate-keys.enum';
import BirdRepository from '$repository/bird.repository';

export const prerender = 'auto';

export const load = async ({ locals, depends, isDataRequest }) => {
  depends(InvalidateKeys.Birds);

  const birds = BirdRepository.getBirds(locals.directusPayload);

  return {
    streamed: {
      birds$: isDataRequest ? birds : await birds,
    },
  };
};
