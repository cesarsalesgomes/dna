<script lang="ts">
  import { fetchesBeingPerformedStore } from '$stores/fetches-being-performed.store';

  import LoadingLayout from './LoadingLayout.svelte';

  import { navigating } from '$app/stores';

</script>

{#if ($fetchesBeingPerformedStore || $navigating)}
  <LoadingLayout />
{/if}
