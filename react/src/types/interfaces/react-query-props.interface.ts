import ReactQueryStatusType from '../react-query-status.type';

import GraphQLError from './graphql-error.interface';

interface ReactQueryProps<T> {
  status: ReactQueryStatusType,
  error: GraphQLError | null,
  isFetching: boolean,
  data?: T
}

export default ReactQueryProps;