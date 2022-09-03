import ReactQueryStatusType from '../types/react-query-status.type';

import GraphQLError from './graphql-error.interface';

// TODO: Check which properties will not be needed after using Suspense
interface ReactQueryProps<T> {
  status?: ReactQueryStatusType,
  error?: GraphQLError | null,
  isFetching?: boolean,
  data?: T
}

export default ReactQueryProps;