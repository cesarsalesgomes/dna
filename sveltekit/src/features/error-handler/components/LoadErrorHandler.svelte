<script lang="ts">
  import type GraphQLError from '$interfaces/graphql-error.interface';

  import { directusServerLoadErrorHandler } from '../utils/error-handler.utils';

  export let error: GraphQLError;

  directusServerLoadErrorHandler(error);

</script>
