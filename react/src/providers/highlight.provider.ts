import { HIGHLIGHT_PROJECT_ID } from '@constants/highlight.constants';
import { H } from 'highlight.run';
import { HighlightPublicInterface } from 'highlight.run/dist/client/src/types/types';

export default class Highlight {
  static instance: HighlightPublicInterface;

  public static getInstance(): HighlightPublicInterface | null {
    if (import.meta.env.PROD) {
      if (!Highlight.instance) {
        Highlight.instance = H;
        Highlight.instance.init(HIGHLIGHT_PROJECT_ID, { environment: 'production', enablePerformanceRecording: false });
      }

      return Highlight.instance;
    }

    return null;
  }

  public static sendErrorToHighlightInProduction(error: any) {
    const highlight = Highlight.getInstance();

    if (highlight) {
      highlight.consumeError(error);
    }
    else {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }
}
