import { createContext, useContext } from 'react';

import AuthContextType from '../types/auth-context.interface';

const AuthContext = createContext<AuthContextType>(null!);

export default function useAuth() {
  return useContext(AuthContext);
}