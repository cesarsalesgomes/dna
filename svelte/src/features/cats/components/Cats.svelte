<script lang="ts">
  import { onDestroy } from 'svelte';

  import { useFindAllCatsQuery, type FindAllCatsQuery } from '@hooks/cat.hooks';
  import { checkIfIsArrayWithItens } from '@utils/array.utils';

  let cats: FindAllCatsQuery | undefined;

  const catsSubscription = useFindAllCatsQuery().subscribe(({ data }) => { cats = data; });

  onDestroy(() => { catsSubscription(); });
</script>

<div class="prose flex flex-col dark:prose-invert">
  <h1 class="my-4">Cats</h1>
  {#if checkIfIsArrayWithItens(cats?.cat) }
    {#each cats.cat as cat}
      <div class="p-2">
        {cat.name}
      </div>
    {/each}
  {:else}
    <h2>No cats</h2>
  {/if}

</div>
