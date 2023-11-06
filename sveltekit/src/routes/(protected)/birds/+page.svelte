<script lang="ts">
  import { LoadingLayout } from '$components/loading';
  import { LoadErrorHandler } from '$features/error-handler/components';
  import { checkIfIsArrayWithItens } from '$utils/array.utils.js';

  export let data;
</script>

<div class="prose flex flex-col dark:prose-invert">
  <h1 class="my-4">Birds</h1>
  {#await data.streamed.birds$}
    <LoadingLayout/>
  {:then birds}
    {#if birds && checkIfIsArrayWithItens(birds)}
      {#each birds as bird}
        <div class="p-2">
          {bird.name}
        </div>
      {/each}
    {:else}
      <h3>No birds</h3>
    {/if}
  {:catch error}
    <LoadErrorHandler {error}/>
  {/await}
</div>
