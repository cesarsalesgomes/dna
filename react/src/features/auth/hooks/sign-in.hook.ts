import { AuthLoginMutation, AuthLoginMutationVariables, useAuthLoginMutation } from '@hooks/auth.hooks';
import { SetStateAction } from 'react';

import { setAccessToken } from '../utils/token.utils';

export default function useSignIn(setAuthTokens: (value: SetStateAction<AuthLoginMutation>) => void) {
  const { mutateAsync } = useAuthLoginMutation();

  return async (variables: AuthLoginMutationVariables, callback: VoidFunction) => {
    const response = await mutateAsync(variables);

    setAuthTokens(response);
    setAccessToken(response);

    callback();
  };
}