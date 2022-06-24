import { AuthLoginMutation } from '@hooks/auth.hooks';
import { ReactNode, useState } from 'react';

import AuthContext from '../contexts/auth.context';
import useSignIn from '../hooks/sign-in.hook';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [authTokens, setAuthTokens] = useState<AuthLoginMutation>(null!);

  const signIn = useSignIn(setAuthTokens);

  const value = { authTokens, signIn };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}