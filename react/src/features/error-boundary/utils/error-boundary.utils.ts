import { UNEXPECTED_ERROR_NOTIFICATION } from '@constants/notifications.constants';
import { ForbiddenErrorCodes, ServerErrorCodes } from '@enums/error-codes.enum';
import GraphQLError from '@interfaces/graphql-error.interface';
import ErrorCodesType from 'src/types/error-codes.type';

// TODO: treat FORBIDDEN error extension
export function checkIfItsAForbiddenError(code: ErrorCodesType) {
  if (
    code === ForbiddenErrorCodes.INVALID_CREDENTIALS ||
    code === ForbiddenErrorCodes.TOKEN_EXPIRED ||
    code === ForbiddenErrorCodes.INVALID_TOKEN
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
