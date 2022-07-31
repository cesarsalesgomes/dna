import AuthContext from '../contexts/auth.context';
import AuthContextType from '../types/auth-context.interface';
import { getPayloadFromAccessToken } from '../utils/auth.utils';

function getAuthContext(accessToken: string): AuthContextType {
  return {
    accessToken,
    userId: getPayloadFromAccessToken(accessToken).id
  };
}

export default function AuthContextProvider(accessToken: string, children: JSX.Element) {
  return <AuthContext.Provider value={getAuthContext(accessToken)}>{children}</AuthContext.Provider>;
}
