import ReactQueryStatusType from '../types/react-query-status.type';

import GraphQLError from './graphql-error.interface';

interface ReactQueryProps<T> {
  status?: ReactQueryStatusType,
  error?: GraphQLError | null,
  data?: T
}

export default ReactQueryProps;