import InvalidateKeys from '$enums/invalidate-keys.enum';
import CatRepository from '$repository/cat.repository';

export const prerender = 'auto';

export const load = async ({ locals, depends, isDataRequest }) => {
  depends(InvalidateKeys.Cats);

  const cats = CatRepository.getCatsWithFamily(locals.directusPayload);

  return {
    streamed: {
      cats$: isDataRequest ? cats : await cats,
    },
  };
};
