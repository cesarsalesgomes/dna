import create from 'zustand';

import { NotificationType } from '../enums';
import NotificationStore from '../interfaces/notification-store.interface';

export const useNotificationStore = create<NotificationStore>((set) => ({
  type: null,
  message: '',
  setMessageAndType: (message: string, type: NotificationType | null) => set(() => ({ message, type })),
}));