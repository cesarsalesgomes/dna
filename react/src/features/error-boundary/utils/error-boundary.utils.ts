import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { ClientErrorCodes, ServerErrorCodes } from '@enums/error-codes.enum';
import GraphQLError from '@interfaces/graphql-error.interface';
import ErrorCodesType from 'src/types/error-codes.type';

// TODO: treat FORBIDDEN error extension
export function checkIfItsAForbiddenError(code: ErrorCodesType) {
  if (
    code === ClientErrorCodes.INVALID_CREDENTIALS ||
    code === ClientErrorCodes.TOKEN_EXPIRED ||
    code === ClientErrorCodes.INVALID_TOKEN
  ) {
    return true;
  }

  return false;
}

export function getGraphQlErrorCode(error: GraphQLError): ErrorCodesType {
  return error.extensions?.code || ServerErrorCodes.INTERNAL_SERVER_ERROR;
}

export function getGraphQlErrorMessage({ error }: { error: GraphQLError }): string {
  return error.message || UNEXPECTED_ERROR_NOTIFICATION;
}
