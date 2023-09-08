import type { NotificationType } from '../enums';

interface NotificationStore {
  type: NotificationType,
  message: string,
}

type NotificationStoreType = NotificationStore | null;

export default NotificationStoreType;
