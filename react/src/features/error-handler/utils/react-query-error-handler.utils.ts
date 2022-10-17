import { FORBIDDEN_ERROR_NOTIFICATION, UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { BANNER_DISPLAY_TIME_IN_SECONDS } from '@constants/system.constants';
import { checkIfItsAForbiddenError, checkIfItsAnInvalidTokenError, getGraphQlErrorCode } from '@features/error-boundary/utils/error-boundary.utils';
import { navigateToLoginSettingStateToRedirectToPreviousPageAfterAuthenticating } from '@features/login/utils/navigate-to-login.utils';
import GraphQLError from '@interfaces/graphql-error.interface';
import { navigateToPreviousPage } from '@utils/navigation.utils';
import { SetStateAction } from 'react';
import { Location, NavigateFunction } from 'react-router-dom';

function hideErrorBannerMessageAfterDisplaySeconds(setBannerMessage: (update: SetStateAction<string>) => void, bannerDisplaySeconds: number) {
  setTimeout(() => setBannerMessage(''), bannerDisplaySeconds * 1000);
}

export function hideErrorBannerMessage(setBannerMessage: (update: SetStateAction<string>) => void) {
  return () => setBannerMessage('');
}

export function reactQueryErrorHandler(
  navigate: NavigateFunction,
  location: Location,
  setBannerMessage: (update: SetStateAction<string>) => void,
  bannerDisplayTimeInSeconds?: number
) {
  return (error: GraphQLError) => {
    try {
      const code = getGraphQlErrorCode(error);

      if (checkIfItsAnInvalidTokenError(code)) {
        navigateToLoginSettingStateToRedirectToPreviousPageAfterAuthenticating(navigate, location);
      }
      else if (checkIfItsAForbiddenError(code)) {
        navigateToPreviousPage(navigate);
        setBannerMessage(FORBIDDEN_ERROR_NOTIFICATION);
      } else {
        // TODO: send error to analytics
        setBannerMessage(error.message ?? UNEXPECTED_ERROR_NOTIFICATION);
      }
    } catch (err) {
      // TODO: send error to analytics
      setBannerMessage(UNEXPECTED_ERROR_NOTIFICATION);
    } finally {
      hideErrorBannerMessageAfterDisplaySeconds(setBannerMessage, bannerDisplayTimeInSeconds ?? BANNER_DISPLAY_TIME_IN_SECONDS);
    }
  };
}
