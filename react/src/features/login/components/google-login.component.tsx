import { useEffect } from 'react';

import useGoogleOAuthLogin from '../hooks/google-oauth-login.hook';

export default function GoogleLogin() {
  const googleOAuth = useGoogleOAuthLogin();

  useEffect(() => {
    (async () => {
      await googleOAuth();
    })();
  }, []);

  return (<div />);
}