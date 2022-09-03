import GraphQLError from './graphql-error.interface';

interface ErrorState {
  hasError: boolean,
  error: GraphQLError | null
}

export default ErrorState;