import { UNEXPECTED_ERROR_MESSAGE } from '@constants/message.constants';

// TODO: Build error page
export default function ErrorFallback(error: { error: Error }) {
  console.error(error);

  return (<div>{UNEXPECTED_ERROR_MESSAGE} </div>);
};
