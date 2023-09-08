import { ITEM_CREATED_NOTIFICATION } from '$constants/notification.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '$constants/system.constants';

import { NotificationType } from '../enums';
import { setNotificationStore, setNullOnNotificationStore } from '../stores/notification.store';

export function hideNotification() {
  setNullOnNotificationStore();
}

export function hideNotificationAfterDisplaySeconds(notificationDisplaySeconds: number) {
  setTimeout(() => hideNotification(), notificationDisplaySeconds * 1000);
}

export function setNotificationOnSuccess(message?: string, notificationDisplayTimeInSeconds?: number) {
  setNotificationStore(message ?? ITEM_CREATED_NOTIFICATION, NotificationType.SUCCESS);
  hideNotificationAfterDisplaySeconds(notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
}
