import { ReactNode, useMemo } from 'react';

import AuthContext from '../contexts/auth.context';
import useSignIn from '../hooks/sign-in.hook';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const signIn = useSignIn();

  const value = useMemo(() => ({ signIn }), [signIn]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}