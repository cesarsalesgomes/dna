import { UnexpectedError } from '@features/info';

export default function ErrorFallback({ error }: { error: Error }) {
  // TODO: change console to send error to analytics
  console.error(error);

  return <UnexpectedError />;
};
