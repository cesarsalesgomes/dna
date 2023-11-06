import { writable } from 'svelte/store';

import type { NotificationType } from '../enums';
import type NotificationStoreType from '../types/notification-store.type';

export const notificationStore = writable<NotificationStoreType>(null);

export const setNotificationStore = (message: string, type: NotificationType) => notificationStore.set({ message, type });

export const setNullOnNotificationStore = () => { notificationStore.set(null); };
