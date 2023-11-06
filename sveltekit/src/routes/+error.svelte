<script lang="ts">
  import { get } from 'svelte/store';

  import { PageNotFoundError, UnexpectedError } from '$components/errors';
  import { NOT_FOUND_SERVER_ERROR_MESSAGE } from '$constants/error.constants';

  import { page } from '$app/stores';

  const { error } = get(page);
</script>

{#if error?.message === NOT_FOUND_SERVER_ERROR_MESSAGE}
  <PageNotFoundError/>
{:else}
  <UnexpectedError error={error}/>
{/if}
