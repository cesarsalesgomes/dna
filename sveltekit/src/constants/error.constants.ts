import { ClientErrorCodes, ServerErrorCodes } from '$enums/error-codes.enum';
import type GraphQLError from '$interfaces/graphql-error.interface';

export const UNEXPECTED_SERVER_ERROR: GraphQLError = {
  message: 'Unexpected error',
  extensions: {
    code: ServerErrorCodes.INTERNAL_SERVER_ERROR,
  },
};

export const FORBIDDEN_ERROR: GraphQLError = {
  message: "You don't have permission to access this",
  extensions: {
    code: ClientErrorCodes.FORBIDDEN,
  },
};

export const NOT_FOUND_SERVER_ERROR_MESSAGE = 'Not Found';
