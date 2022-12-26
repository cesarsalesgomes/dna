import { UnexpectedError } from '@features/info';
import Highlight from '@providers/highlight.provider';

export default function ErrorFallback({ error }: { error: Error }) {
  Highlight.sendErrorToHighlightInProduction(error);

  return <UnexpectedError />;
};
