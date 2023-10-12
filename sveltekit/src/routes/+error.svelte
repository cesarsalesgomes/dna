<script lang="ts">
  // eslint-disable-next-line import/extensions, import/no-unresolved, import/no-extraneous-dependencies
  import { get } from 'svelte/store';

  import { NotFoundError, UnexpectedError } from '$components/errors';
  import { NOT_FOUND_SERVER_ERROR_MESSAGE } from '$constants/error.constants';

  // eslint-disable-next-line import/extensions, import/no-unresolved
  import { page } from '$app/stores';

  const { error } = get(page);

</script>

{#if error?.message === NOT_FOUND_SERVER_ERROR_MESSAGE}
  <NotFoundError/>
{:else}
  <UnexpectedError error={error}/>
{/if}
