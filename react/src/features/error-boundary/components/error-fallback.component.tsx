import { UnexpectedError } from '@features/info';
import { sendErrorToHighlightInProduction } from '@providers/highlight.provider';

export default function ErrorFallback({ error }: { error: Error }) {
  sendErrorToHighlightInProduction(error);

  return <UnexpectedError />;
};
