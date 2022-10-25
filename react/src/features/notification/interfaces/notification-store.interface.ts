import { NotificationType } from '../enums';
import SetNotificationMessageAndType from '../types/set-notification-message-and-type.type';

interface NotificationStore {
  type: NotificationType | null,
  message: string,
  setMessageAndType: SetNotificationMessageAndType,
}

export default NotificationStore;