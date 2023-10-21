<script lang="ts">
  // eslint-disable-next-line import/extensions, import/no-unresolved, import/no-extraneous-dependencies
  import { get } from 'svelte/store';

  import { UnexpectedError } from '$components/errors';

  // eslint-disable-next-line import/extensions, import/no-unresolved
  import { page } from '$app/stores';

  const { error } = get(page);

</script>

<UnexpectedError error={error}/>
