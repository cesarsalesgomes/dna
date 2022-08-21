import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';

// TODO: Build error page
export default function ErrorFallback(error: { error: Error }) {
  console.error(error);

  return (<div>{UNEXPECTED_ERROR_NOTIFICATION} </div>);
};
