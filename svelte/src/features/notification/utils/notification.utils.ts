import { notificationStore } from '../stores';

export function hideNotificationAfterDisplaySeconds(notificationDisplaySeconds: number) {
  setTimeout(() => notificationStore.set(''), notificationDisplaySeconds * 1000);
}
