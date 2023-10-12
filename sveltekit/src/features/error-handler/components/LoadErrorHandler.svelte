<script lang="ts">
  import type GraphQLError from '$interfaces/graphql-error.interface';

  import { directusServerLoadErrorHandler } from '../utils/error-handler.utils';

  // eslint-disable-next-line import/no-mutable-exports
  export let error: GraphQLError;

  directusServerLoadErrorHandler(error);
</script>
