<script lang="ts">
  import { useFindAllCatsQuery } from '@hooks/cat.hooks';
  import QueryClientSingleton from '@providers/svelte-query-client.provider';
  import { checkIfIsArrayWithItens } from '@utils/array.utils';
  import { navigateToRouteAndSetCurrentRouteStore } from '@utils/router.utils';

  import CreateCat from './CreateCat.svelte';

  const queryClient = QueryClientSingleton.getInstance();

  const cats = useFindAllCatsQuery();

</script>

<div class="prose flex flex-col items-start dark:prose-invert">
  <h1 class="my-4">Cats</h1>
  <CreateCat/>
  {#if checkIfIsArrayWithItens($cats?.data?.cat) }
    {#each $cats.data.cat as cat}
      <button type="button" class="p-2 {queryClient.getQueryData(['catById', { data: cat.id }]) ? 'text-primary-700' : ''}" on:click={() => navigateToRouteAndSetCurrentRouteStore(`/cats/${cat.id}`)}>
        {cat.name}
      </button>
    {/each}
  {:else}
    <h2>No cats</h2>
  {/if}
</div>
