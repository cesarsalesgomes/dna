import { bannerMessageAtom } from '@features/banner/atoms';
import { useAtom } from 'jotai';
import { useLocation, useNavigate } from 'react-router-dom';

import { reactQueryErrorHandler, resetReactQueryErrorHandler } from '../utils/react-query-error-handler.utils';

export default function useErrorHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setBannerMessage] = useAtom(bannerMessageAtom);

  return {
    reactQueryErrorHandler: reactQueryErrorHandler(navigate, location, setBannerMessage),
    resetReactQueryErrorHandler: resetReactQueryErrorHandler(setBannerMessage)
  };
}