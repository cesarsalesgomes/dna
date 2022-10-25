import SetNotificationMessageAndType from '../types/set-notification-message-and-type.type';

export function hideNotificationAfterDisplaySeconds(
  setNotificationMessageAndType: SetNotificationMessageAndType, notificationDisplaySeconds: number
) {
  setTimeout(() => setNotificationMessageAndType('', null), notificationDisplaySeconds * 1000);
}