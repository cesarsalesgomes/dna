import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '@constants/system.constants';
import { notificationStore } from '@features/notification/stores';
import { hideNotificationAfterDisplaySeconds } from '@features/notification/utils';
import type GraphQLError from '@interfaces/graphql-error.interface';

export function svelteQueryErrorHandler(error: GraphQLError, notificationDisplayTimeInSeconds?: number) {
  try {
    notificationStore.set(error.message ?? UNEXPECTED_ERROR_NOTIFICATION);
  } catch (err) {
    notificationStore.set(UNEXPECTED_ERROR_NOTIFICATION);
  } finally {
    hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  }
}
