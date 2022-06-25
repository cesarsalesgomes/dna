import { AuthLoginMutationVariables } from '@hooks/auth.hooks';

interface AuthContextType {
  signIn: (variables: AuthLoginMutationVariables, callback: VoidFunction) => void;
}

export default AuthContextType;