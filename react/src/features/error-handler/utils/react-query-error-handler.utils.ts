import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { checkIfItsAForbiddenError, getGraphQlErrorCode } from '@features/error-boundary/utils/error-boundary.utils';
import { navigateToLoginSettingStateToRedirectToPreviousPageAfterAuthenticating } from '@features/login/utils/navigate-to-login.utils';
import GraphQLError from '@interfaces/graphql-error.interface';
import { SetStateAction } from 'react';
import { Location, NavigateFunction } from 'react-router-dom';

export function reactQueryErrorHandler(
  navigate: NavigateFunction,
  location: Location,
  setBannerMessage: (update: SetStateAction<string>) => void
) {
  return (error: GraphQLError) => {
    try {
      const code = getGraphQlErrorCode(error);

      if (checkIfItsAForbiddenError(code)) navigateToLoginSettingStateToRedirectToPreviousPageAfterAuthenticating(navigate, location);

      // TODO: send error to analytics
      if (error.message) {
        setBannerMessage(error.message);
      } else {
        setBannerMessage(UNEXPECTED_ERROR_NOTIFICATION);
      }
    } catch (err) {
      // TODO: send error to analytics
      setBannerMessage(UNEXPECTED_ERROR_NOTIFICATION);
    }
  };
}

export function resetReactQueryErrorHandler(setBannerMessage: (update: SetStateAction<string>) => void) {
  return () => setBannerMessage('');
}