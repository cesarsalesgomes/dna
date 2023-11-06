import { UNEXPECTED_ERROR_NOTIFICATION } from '$constants/notification.constants';
import { LOGIN_ROUTE } from '$constants/route.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '$constants/system.constants';
import { NotificationType } from '$features/notification/enums';
import { setNotificationStore } from '$features/notification/stores/notification.store';
import { hideNotificationAfterDisplaySeconds } from '$features/notification/utils';
import type DirectusError from '$interfaces/directus-error.interface';
import type GraphQLError from '$interfaces/graphql-error.interface';
import { setShowForbiddenAccessModalStore } from '$stores/show-forbidden-access-modal.store';
import { checkIfIsArrayWithItens } from '$utils/array.utils';

import { checkIfItsAForbiddenError, checkIfItsAnInvalidTokenError, getGraphQlErrorCode } from './error-code.utils';

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

/**
 * Directus Sveltekit Client Error Handler
 */
export function directusRequestErrorHandler(directusError: DirectusError, notificationDisplayTimeInSeconds?: number) {
  try {
    const [error] = directusError.errors;

    const code = getGraphQlErrorCode(error);

    if (checkIfItsAnInvalidTokenError(code)) {
      goto(LOGIN_ROUTE);
    } else if (checkIfItsAForbiddenError(code)) {
      setNotificationStore(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ALERT);
    } else {
      setNotificationStore(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
    }
  } catch (err) {
    setNotificationStore(UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } finally {
    hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}

/**
 * Directus Sveltekit Server Error Handler
 */
export function checkIsDirectusError(e: any): boolean {
  if (!e) return false;

  return checkIfIsArrayWithItens(e.errors);
}

export function getDirectusError({ errors }: DirectusError): GraphQLError {
  return errors[0];
}

export function directusServerLoadErrorHandler(error: GraphQLError, notificationDisplayTimeInSeconds?: number) {
  try {
    const code = getGraphQlErrorCode(error);

    if (checkIfItsAnInvalidTokenError(code)) {
      goto(LOGIN_ROUTE);
    } else if (checkIfItsAForbiddenError(code)) {
      setShowForbiddenAccessModalStore(true);
    } else {
      setNotificationStore(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
    }
  } catch (err) {
    setNotificationStore(UNEXPECTED_ERROR_NOTIFICATION, NotificationType.ERROR);
  } finally {
    hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}
