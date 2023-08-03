import type GraphQLError from './graphql-error.interface';

interface DirectusError {
  errors: GraphQLError[];
}

export default DirectusError;
