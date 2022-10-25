import { NotificationType } from '../enums';
import { useNotificationStore } from '../stores';

export default function NotificationLabel() {
  let labelText: string;
  let labelColor: string;

  const type = useNotificationStore((state) => state.type);

  switch (type) {
    case NotificationType.SUCCESS:
      labelText = 'Success';
      labelColor = 'text-green-400';
      break;
    case NotificationType.ERROR:
      labelText = 'Error';
      labelColor = 'text-red-400';
      break;
    case NotificationType.ALERT:
      labelText = 'Alert';
      labelColor = 'text-yellow-400';
      break;
    default:
      labelText = '';
      labelColor = '';
  }

  return <p className={`text-sm font-medium ${labelColor}`}>{labelText}</p>;
}