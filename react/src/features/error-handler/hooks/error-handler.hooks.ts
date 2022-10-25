import { useNotificationStore } from '@features/notification';
import { useLocation, useNavigate } from 'react-router-dom';

import { reactQueryErrorHandler, hideErrorNotificationMessage } from '../utils/react-query-error-handler.utils';

export default function useErrorHandler() {
  const navigate = useNavigate();
  const location = useLocation();
  const setMessageAndType = useNotificationStore((store) => store.setMessageAndType);

  return {
    reactQueryErrorHandler: reactQueryErrorHandler(navigate, location, setMessageAndType),
    hideErrorBannerMessageHandler: hideErrorNotificationMessage(setMessageAndType)
  };
}