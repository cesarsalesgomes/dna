import { writable } from 'svelte/store';

import type { NotificationType } from '../enums';
import type NotificationStore from '../interfaces/notification-store.interface';

export const notificationStore = writable<NotificationStore>(null);

export const setNotificationStore = (message: string, type: NotificationType) => notificationStore.set({ message, type });

export const setNullOnNotificationStore = () => { notificationStore.set(null); };
