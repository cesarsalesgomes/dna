<script lang="ts">

  import { onDestroy } from 'svelte';

  import { LoadingButton } from '$components/loading';
  import { fetchesBeingPerformedStore } from '$stores/fetches-being-performed.store';

  export let label: string;

  let fetchesBeingPerformed: number;

  const unsubscribe = fetchesBeingPerformedStore.subscribe((n) => { fetchesBeingPerformed = n; });

  onDestroy(unsubscribe);

</script>

<div class="relative">
  {#if fetchesBeingPerformed > 0}
    <LoadingButton />
  {/if}
  <button
    type="submit"
    class={`group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${fetchesBeingPerformed > 0 ? 'text-primary-600' : 'text-white'}`}
  >
    {label}
  </button>
</div >
