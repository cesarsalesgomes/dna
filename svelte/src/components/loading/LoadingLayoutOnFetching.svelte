<script lang="ts">
  import { onDestroy } from 'svelte';

  import { fetchesBeingPerformedStore } from '@stores/fetches-being-performed.store';

  import LoadingLayout from './LoadingLayout.svelte';

  let fetchesBeingPerformed: number;

  const unsubscribe = fetchesBeingPerformedStore.subscribe((n) => { fetchesBeingPerformed = n; });

  onDestroy(unsubscribe);
</script>

{#if fetchesBeingPerformed > 0}
  <LoadingLayout isSuspense={false} />
{/if}
