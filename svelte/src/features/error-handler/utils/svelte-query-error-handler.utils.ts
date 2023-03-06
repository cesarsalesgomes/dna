import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '@constants/system.constants';
import { NotificationType } from '@features/notification/enums';
import { setNotificationStore } from '@features/notification/stores/notification.store';
import { hideNotificationAfterDisplaySeconds } from '@features/notification/utils';
import type GraphQLError from '@interfaces/graphql-error.interface';

export function svelteQueryErrorHandler(error: GraphQLError, notificationDisplayTimeInSeconds?: number) {
  const type = NotificationType.ERROR;

  try {
    setNotificationStore(error.message ?? UNEXPECTED_ERROR_NOTIFICATION, type);
  } catch (err) {
    setNotificationStore(UNEXPECTED_ERROR_NOTIFICATION, type);
  } finally {
    hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}
