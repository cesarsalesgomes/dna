<script lang="ts">
  import LoadingLayout from '$components/loading/LoadingLayout.svelte';
  import DirectusRestClient from '$lib/directus/directus-rest-client.sdk.js';
  import { checkIfIsArrayWithItens } from '$utils/array.utils';

  // eslint-disable-next-line import/no-mutable-exports
  export let data;

  const cats$ = DirectusRestClient.request(data.streamed.cats$);

</script>

<div class="prose flex flex-col items-start dark:prose-invert">
  <h1 class="my-4">Cats</h1>
  {#await cats$}
    <LoadingLayout/>
  {:then cats}
    {#if cats && checkIfIsArrayWithItens(cats) }
      {#each cats as cat}
        <div class="p-2">
          {cat.name}
        </div>
      {/each}
    {:else}
      <h3>No cats</h3>
    {/if}
  {/await}
</div>
