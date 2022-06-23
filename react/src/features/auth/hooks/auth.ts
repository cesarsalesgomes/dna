import { createContext, useContext } from 'react';

import AuthContextType from '../types/auth-context';

const AuthContext = createContext<AuthContextType>(null!);

export default function useAuth() {
  return useContext(AuthContext);
}