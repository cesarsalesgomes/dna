import { AuthLoginMutationVariables, useAuthLoginMutation } from '@hooks/auth.hooks';

export default function useSignIn() {
  const { mutateAsync } = useAuthLoginMutation();

  return async (variables: AuthLoginMutationVariables) => (await mutateAsync(variables))?.auth_login?.access_token;
}