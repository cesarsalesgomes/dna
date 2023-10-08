import { UNEXPECTED_ERROR_NOTIFICATION } from '$constants/notification.constants';
import { LOGIN_ROUTE } from '$constants/route.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '$constants/system.constants';
import { NotificationType } from '$features/notification/enums';
import { setNotificationStore } from '$features/notification/stores/notification.store';
import { hideNotificationAfterDisplaySeconds } from '$features/notification/utils';
import type DirectusError from '$interfaces/directus-error.interface';

import { checkIfItsAnInvalidTokenError, getGraphQlErrorCode } from './error-code.utils';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { goto } from '$app/navigation';

export function directusLoginErrorHandler(directusError: DirectusError) {
  try {
    const [error] = directusError.errors;

    setNotificationStore(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } catch (err) {
    setNotificationStore(UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } finally {
    hideNotificationAfterDisplaySeconds(NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}

export function directusRequestErrorHandler(directusError: DirectusError, notificationDisplayTimeInSeconds?: number) {
  try {
    const [error] = directusError.errors;

    const code = getGraphQlErrorCode(error);

    if (checkIfItsAnInvalidTokenError(code)) {
      goto(LOGIN_ROUTE);
    } else {
      setNotificationStore(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
    }
  } catch (err) {
    setNotificationStore(UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } finally {
    hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}
