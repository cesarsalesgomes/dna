<script lang="ts">
  import { get } from 'svelte/store';

  import { UnexpectedError } from '$components/errors';

  import { page } from '$app/stores';

  const { error } = get(page);

</script>

<UnexpectedError error={error}/>
