<script lang="ts">
  import { ClientErrorCodes } from '$enums/error-codes.enum';
  import type GraphQLError from '$interfaces/graphql-error.interface';

  export let error: GraphQLError | null;

  function getErrorTitle() {
    const code = error?.extensions?.code;

    switch (code) {
      case ClientErrorCodes.FORBIDDEN:
        return 'Forbidden Access';
      default:
        return 'Unexpected Error';
    }
  }

</script>

<main class="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <h1 class="prose mt-4 text-3xl font-bold tracking-tight sm:text-5xl dark:prose-invert">{getErrorTitle()}</h1>
    <p class="prose mt-6 text-base leading-7 dark:prose-invert">{error?.message}</p>
  </div>
</main>
