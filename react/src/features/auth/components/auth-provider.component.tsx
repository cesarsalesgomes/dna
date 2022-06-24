import { fakeAuthProvider } from '@providers/auth.provider';
import { ReactNode, useState } from 'react';

import AuthContext from '../contexts/auth.context';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = (newUser: string, callback: VoidFunction) => fakeAuthProvider.signin(() => {
    setUser(newUser);
    callback();
  });

  const signout = (callback: VoidFunction) => fakeAuthProvider.signout(() => {
    setUser(null);
    callback();
  });

  const value = { user, signin, signout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}