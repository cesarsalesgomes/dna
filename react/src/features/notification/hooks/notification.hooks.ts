import { ITEM_CREATED_NOTIFICATION } from '@constants/notifications.constants';
import { NOTIFICATION_DISPLAY_TIME_IN_SECONDS } from '@constants/system.constants';
import { NotificationType, useNotificationStore, hideNotificationAfterDisplaySeconds } from '@features/notification';

export function useSetNotificationOnSuccess(message?: string, notificationDisplayTimeInSeconds?: number) {
  const setNotificationMessageAndType = useNotificationStore((store) => store.setMessageAndType);

  return () => {
    setNotificationMessageAndType(message ?? ITEM_CREATED_NOTIFICATION, NotificationType.SUCCESS);
    hideNotificationAfterDisplaySeconds(setNotificationMessageAndType, notificationDisplayTimeInSeconds ?? NOTIFICATION_DISPLAY_TIME_IN_SECONDS);
  };
};