import { lazy, Suspense } from 'react';

import { useNotificationStore } from '../stores';

const NotificationMessage = lazy(() => import('./notification-message.component'));

export default function Notification() {
  const { message, setMessageAndType } = useNotificationStore((state) => state);

  return (message ? <Suspense><NotificationMessage message={message} setMessageAndType={setMessageAndType} /></Suspense> : <div />);
}
