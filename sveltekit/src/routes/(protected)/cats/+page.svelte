<script lang="ts">
  import LoadingLayout from '$components/loading/LoadingLayout.svelte';
  import { LoadErrorHandler } from '$features/error-handler/components';
  import { checkIfIsArrayWithItens } from '$utils/array.utils';

  import CreateCat from './components/CreateCat.svelte';

  export let data;
</script>

<div class="prose flex flex-col items-start dark:prose-invert">
  <h1 class="my-4">Cats</h1>
  <CreateCat/>
  {#await data.streamed.cats$}
    <LoadingLayout/>
  {:then cats}
    {#if cats && checkIfIsArrayWithItens(cats) }
      <table class="table-auto">
        <thead>
          <tr>
            <th>Cat</th>
            <th>Family</th>
          </tr>
        </thead>
        <tbody>
          {#each cats as cat}
            <tr>
              <td>{cat.name}</td>
              <td>{cat.family?.name ?? ''}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {:else}
      <h3>No cats</h3>
    {/if}
  {:catch error}
    <LoadErrorHandler {error}/>
  {/await}
</div>
