import { UNEXPECTED_ERROR_MESSAGE } from '@constants/message.constants';
import { DirectusForbiddenErrorCode, ServerErrorCode } from '@enums/directus-error-code.enum';
import GraphQLError from '@interfaces/graphql-error.interface';
import DirectusErrorCodeType from 'src/types/directus-error-code.type';

// TODO: treat FORBIDDEN error extension
export function checkIfItsAForbiddenError(code: DirectusErrorCodeType) {
  if (
    code === DirectusForbiddenErrorCode.INVALID_CREDENTIALS ||
    code === DirectusForbiddenErrorCode.TOKEN_EXPIRED ||
    code === DirectusForbiddenErrorCode.INVALID_TOKEN
  ) {
    return true;
  }

  return false;
}

export function getGraphQlErrorCode(error: GraphQLError): DirectusErrorCodeType {
  return error.extensions?.code || ServerErrorCode.INTERNAL_SERVER_ERROR;
}

export function getGraphQlErrorMessage({ error }: { error: GraphQLError }): string {
  return error.message || UNEXPECTED_ERROR_MESSAGE;
}
