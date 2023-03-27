import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '@constants/system.constants';
import { NotificationType } from '@features/notification/enums';
import { setNotificationStore } from '@features/notification/stores/notification.store';
import { hideNotificationAfterDisplaySeconds } from '@features/notification/utils';
import type GraphQLError from '@interfaces/graphql-error.interface';
import { setShowForbiddenAccessModalStore } from '@stores/show-forbidden-access-modal.store';

import { checkIfItsAForbiddenError, getGraphQlErrorCode } from './error-code.utils';

export function svelteQueryErrorHandler(error: GraphQLError, notificationDisplayTimeInSeconds?: number) {
  const type = NotificationType.ERROR;

  try {
    const code = getGraphQlErrorCode(error);

    if (checkIfItsAForbiddenError(code)) {
      setShowForbiddenAccessModalStore(true);
    } else {
      setNotificationStore(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, type);
    }
  } catch (err) {
    setNotificationStore(UNEXPECTED_ERROR_NOTIFICATION, type);
  } finally {
    hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}
