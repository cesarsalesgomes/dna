import { HIGHLIGHT_PROJECT_ID } from '@constants/highlight.constants';
import { H } from 'highlight.run';

export function startHighlightConfiguration() {
  if (import.meta.env.PROD) H.init(HIGHLIGHT_PROJECT_ID, { environment: 'production' });
}

export function sendErrorToHighlightInProduction(error: any) {
  if (import.meta.env.PROD) {
    H.consumeError(error);
  }
  else {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
