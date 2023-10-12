import { ServerErrorCodes } from '$enums/error-codes.enum';
import type GraphQLError from '$interfaces/graphql-error.interface';

export const UNEXPECTED_SERVER_ERROR: GraphQLError = {
  message: 'Unexpected error',
  extensions: {
    code: ServerErrorCodes.INTERNAL_SERVER_ERROR,
  },
};
