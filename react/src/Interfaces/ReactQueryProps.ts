import ReactQueryStatusType from '../Types/ReactQueryStatus';
import GraphQLError from './GraphQLError';

interface ReactQueryProps<T> {
  status: ReactQueryStatusType,
  error: GraphQLError | null,
  isFetching: boolean,
  data?: T
}

export default ReactQueryProps;