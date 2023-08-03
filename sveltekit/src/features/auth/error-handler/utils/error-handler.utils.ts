import { UNEXPECTED_ERROR_NOTIFICATION } from '$constants/notification.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '$constants/system.constants';
import { notificationStore } from '$features/notification/stores';
import { hideNotificationAfterDisplaySeconds } from '$features/notification/utils';
import type DirectusError from '$interfaces/directus-error.interface';

export function directusErrorHandler(directusError: DirectusError, notificationDisplayTimeInSeconds?: number) {
  try {
    const [error] = directusError.errors;

    notificationStore.set(error.message ?? UNEXPECTED_ERROR_NOTIFICATION);
  } catch (err) {
    notificationStore.set(UNEXPECTED_ERROR_NOTIFICATION);
  } finally {
    hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}
