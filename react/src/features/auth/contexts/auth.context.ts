import { createContext } from 'react';

import AuthContextType from '../types/auth-context.interface';

const AuthContext = createContext<AuthContextType>(null!);

export default AuthContext;
