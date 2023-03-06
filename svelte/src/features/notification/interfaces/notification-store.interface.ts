import type { NotificationType } from '../enums';

interface NotificationStore {
  type: NotificationType,
  message: string,
}

export default NotificationStore;
