<script lang="ts">
  import { useFindAllCatsQuery } from '@hooks/cat.hooks';
  import { checkIfIsArrayWithItens } from '@utils/array.utils';

  import CreateCat from './CreateCat.svelte';

  const cats = useFindAllCatsQuery();

</script>

<div class="prose flex flex-col dark:prose-invert">
  <h1 class="my-4">Cats</h1>
  <CreateCat/>
  {#if checkIfIsArrayWithItens($cats?.data?.cat) }
    {#each $cats.data.cat as cat}
      <div class="p-2">
        {cat.name}
      </div>
    {/each}
  {:else}
    <h2>No cats</h2>
  {/if}
</div>
