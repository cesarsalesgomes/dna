import { AuthLoginMutationVariables, useAuthLoginMutation } from '@hooks/auth.hooks';

import { setAccessTokenToLocalStorage } from '../utils/storage.utils';

export default function useSignIn() {
  const { mutateAsync } = useAuthLoginMutation();

  return async (variables: AuthLoginMutationVariables, callback: VoidFunction) => {
    const accessToken = (await mutateAsync(variables)).auth_login?.access_token as string;

    setAccessTokenToLocalStorage(accessToken);

    callback();
  };
}