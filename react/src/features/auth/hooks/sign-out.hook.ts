import { resetStringAtom } from '@utils/jotai.utils';
import { useAtom } from 'jotai';

import { accessTokenAtom, userIdAtom } from '../atoms';
import { removeAccessTokenFromLocalStorage } from '../utils/storage.utils';

export default function useSignOut() {
  const [, setAccessToken] = useAtom(accessTokenAtom);
  const [, setUserId] = useAtom(userIdAtom);

  return () => {
    resetStringAtom(setAccessToken);
    resetStringAtom(setUserId);
    removeAccessTokenFromLocalStorage();
  };
}