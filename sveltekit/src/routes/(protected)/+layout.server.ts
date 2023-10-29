import UserRepository from '$repository/user.repository';

export const prerender = 'auto';

export const load = async ({ locals, isDataRequest }) => {
  const me = UserRepository.getMe(locals.directusPayload);

  return {
    streamed: {
      me$: isDataRequest ? me : await me,
    },
    accessToken: locals.accessToken,
  };
};
