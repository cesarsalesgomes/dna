<script lang="ts">
  import { onDestroy } from 'svelte';

  import { fetchesBeingPerformedStore } from '@stores/fetches-being-performed.store';
  import { lazyLoadingStore } from '@stores/lazy-loading.store';

  import LoadingLayout from './LoadingLayout.svelte';

  let fetchesBeingPerformed: number;
  let lazyLoading: boolean;

  const unsub1 = fetchesBeingPerformedStore.subscribe((n) => { fetchesBeingPerformed = n; });

  const unsub2 = lazyLoadingStore.subscribe((value) => { lazyLoading = value; });

  onDestroy(() => { unsub1(); unsub2(); });
</script>

{#if fetchesBeingPerformed > 0 || lazyLoading}
  <LoadingLayout isSuspense={false} />
{/if}
