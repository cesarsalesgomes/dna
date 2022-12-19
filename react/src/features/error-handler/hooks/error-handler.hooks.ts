import { showForbiddenAccessModalAtom } from '@atoms/show-forbidden-access-modal.atom';
import { useNotificationStore } from '@features/notification';
import { useAtom } from 'jotai';
import { useLocation, useNavigate } from 'react-router-dom';

import { reactQueryErrorHandler, hideErrorNotificationMessage } from '../utils/react-query-error-handler.utils';

export default function useErrorHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  const setMessageAndType = useNotificationStore((store) => store.setMessageAndType);
  const [, setShowForbiddenAccessModal] = useAtom(showForbiddenAccessModalAtom);

  return {
    reactQueryErrorHandler: reactQueryErrorHandler(navigate, location, setMessageAndType, setShowForbiddenAccessModal),
    hideErrorBannerMessageHandler: hideErrorNotificationMessage(setMessageAndType)
  };
}