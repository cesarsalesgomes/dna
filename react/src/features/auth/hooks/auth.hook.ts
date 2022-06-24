import { useContext } from 'react';

import AuthContext from '../contexts/auth.context';

export default function useAuth() {
  return useContext(AuthContext);
}