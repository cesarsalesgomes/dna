import { AuthLoginMutation, AuthLoginMutationVariables } from '@hooks/auth.hooks';

interface AuthContextType {
  authTokens: AuthLoginMutation;
  signIn: (variables: AuthLoginMutationVariables, callback: VoidFunction) => void;
}

export default AuthContextType;