import { AuthLoginMutationVariables, useAuthLoginMutation } from '@hooks/auth.hooks';

import { setAccessToken } from '../utils/token.utils';

export default function useSignIn() {
  const { mutateAsync } = useAuthLoginMutation();

  return async (variables: AuthLoginMutationVariables, callback: VoidFunction) => {
    setAccessToken(await mutateAsync(variables));

    callback();
  };
}