import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { checkIfItsAForbiddenError, getGraphQlErrorCode } from '@features/error-boundary/utils/error-boundary.utils';
import { SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import GraphQLError from 'src/types/interfaces/graphql-error.interface';

export function reactQueryErrorHandler(
  navigate: NavigateFunction, setBannerMessage: (update: SetStateAction<string>) => void
) {
  return (error: GraphQLError) => {
    try {
      const code = getGraphQlErrorCode(error);

      if (checkIfItsAForbiddenError(code)) navigate('/navigate-to-login');

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