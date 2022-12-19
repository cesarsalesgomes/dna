import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '@constants/system.constants';
import { checkIfItsAForbiddenError, checkIfItsAnInvalidTokenError, getGraphQlErrorCode } from '@features/error-boundary/utils/error-boundary.utils';
import { navigateToLoginSettingStateToRedirectToPreviousPageAfterAuthenticating } from '@features/login/utils/navigate-to-login.utils';
import { hideNotificationAfterDisplaySeconds, NotificationType, SetNotificationMessageAndType } from '@features/notification';
import GraphQLError from '@interfaces/graphql-error.interface';
import { sendErrorToHighlightInProduction } from '@providers/highlight.provider';
import { SetStateAction } from 'jotai';
import { Location, NavigateFunction } from 'react-router-dom';

export function hideErrorNotificationMessage(setNotificationMessageAndType: SetNotificationMessageAndType) {
  return () => setNotificationMessageAndType('', null);
}

export function reactQueryErrorHandler(
  navigate: NavigateFunction,
  location: Location,
  setNotificationMessageAndType: SetNotificationMessageAndType,
  setShowForbiddenAccessModal: (update: SetStateAction<boolean>) => void
) {
  return (error: GraphQLError, notificationDisplayTimeInSeconds?: number) => {
    try {
      const code = getGraphQlErrorCode(error);

      if (checkIfItsAnInvalidTokenError(code)) {
        navigateToLoginSettingStateToRedirectToPreviousPageAfterAuthenticating(navigate, location);
      }
      else if (checkIfItsAForbiddenError(code)) {
        setShowForbiddenAccessModal(true);
      } else {
        sendErrorToHighlightInProduction(error);
        setNotificationMessageAndType(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
      }
    } catch (err) {
      sendErrorToHighlightInProduction(error);
      setNotificationMessageAndType(UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
    } finally {
      hideNotificationAfterDisplaySeconds(setNotificationMessageAndType, notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
    }
  };
}
