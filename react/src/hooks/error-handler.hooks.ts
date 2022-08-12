import { checkIfItsAForbiddenError, getGraphQlErrorCode } from '@features/error-boundary/utils/error-boundary.utils';
import { NavigateFunction } from 'react-router-dom';
import GraphQLError from 'src/types/interfaces/graphql-error.interface';

import useNavigation from './navigation.hooks';

function reactQueryErrorHandler(navigate: NavigateFunction) {
  return (error: GraphQLError) => {
    try {
      const code = getGraphQlErrorCode(error);

      if (checkIfItsAForbiddenError(code)) navigate('navigate-to-login');

      // TODO: Show toastr error
    } catch (err) {
      // TODO: Show unexpected toastr error
    }
  };

}

export default function useErrorHandler() {
  const { navigate } = useNavigation();

  return {
    reactQueryErrorHandler: reactQueryErrorHandler(navigate)
  };
}