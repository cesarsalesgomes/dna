/* eslint-disable @typescript-eslint/no-throw-literal */
import GraphQLError from '../types/interfaces/graphql-error.interface';

export function throwGraphQLErrorIfExists(error: GraphQLError | null) {
  if (error) throw error;
}