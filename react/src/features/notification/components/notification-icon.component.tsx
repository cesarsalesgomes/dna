import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { NotificationType } from '../enums';
import { useNotificationStore } from '../stores';

export default function NotificationIcon() {
  const type = useNotificationStore((state) => state.type);

  switch (type) {
    case NotificationType.SUCCESS:
      return <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />;
    case NotificationType.ERROR:
      return <XCircleIcon className="h-6 w-6 text-red-400" aria-hidden="true" />;
    case NotificationType.ALERT:
      return <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400" aria-hidden="true" />;
    default:
      return <div />;
      break;
  }
}