<script lang="ts">
  import LoadingLayout from '$components/loading/LoadingLayout.svelte';
  import { checkIfIsArrayWithItens } from '$utils/array.utils';

  import CreateCat from './components/CreateCat.svelte';

  // eslint-disable-next-line import/no-mutable-exports
  export let data;

</script>

<div class="prose flex flex-col items-start dark:prose-invert">
  <h1 class="my-4">Cats</h1>
  <CreateCat/>
  {#await data.streamed.cats$}
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
