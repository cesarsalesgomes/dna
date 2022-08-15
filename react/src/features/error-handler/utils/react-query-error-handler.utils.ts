import { UNEXPECTED_ERROR_MESSAGE } from '@constants/message.constants';
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

      if (checkIfItsAForbiddenError(code)) navigate('navigate-to-login');

      if (error.message) {
        setBannerMessage(error.message);
      } else {
        setBannerMessage(UNEXPECTED_ERROR_MESSAGE);
      }
    } catch (err) {
      setBannerMessage(UNEXPECTED_ERROR_MESSAGE);
    }
  };
}

export function resetReactQueryErrorHandler(setBannerMessage: (update: SetStateAction<string>) => void) {
  return () => setBannerMessage('');
}