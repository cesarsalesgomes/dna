import { bannerMessageAtom } from '@features/banner/atoms';
import { useAtom } from 'jotai';

import useNavigation from '../../../hooks/navigation.hooks';
import { reactQueryErrorHandler, resetReactQueryErrorHandler } from '../utils/react-query-error-handler.utils';

export default function useErrorHandler() {
  const { navigate } = useNavigation();
  const [, setBannerMessage] = useAtom(bannerMessageAtom);

  return {
    reactQueryErrorHandler: reactQueryErrorHandler(navigate, setBannerMessage),
    resetReactQueryErrorHandler: resetReactQueryErrorHandler(setBannerMessage)
  };
}