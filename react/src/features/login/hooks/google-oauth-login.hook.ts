import { DirectusRequestOptions } from '@config/react-query/directus/directus-config-options';
import { accessTokenAtom } from '@features/auth/atoms';
import { setAccessTokenToLocalStorage } from '@features/auth/utils/storage.utils';
import { useAuthRefreshMutation } from '@hooks/auth.hooks';
import { useSendBackToLastPageTriedToVisit } from '@hooks/navigation.hooks';
import { useAtom } from 'jotai';

/**
 * Directus SSO tutorial
 * 
 * https://docs.directus.io/self-hosted/sso.html#seamless-sso
 */
export default function useGoogleOAuthLogin() {
  const { mutateAsync } = useAuthRefreshMutation();
  const sendBackToLastPageTriedToVisit = useSendBackToLastPageTriedToVisit();
  const [, setAccessToken] = useAtom(accessTokenAtom);

  DirectusRequestOptions.options = { credentials: 'include' };

  return async () => {
    const accessToken = (await mutateAsync({}))?.auth_refresh?.access_token;

    if (accessToken) {
      setAccessToken(accessToken);
      setAccessTokenToLocalStorage(accessToken);
      sendBackToLastPageTriedToVisit();
    }
  };
}