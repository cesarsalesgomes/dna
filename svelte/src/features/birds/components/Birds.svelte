<script lang="ts">
  import { get } from 'svelte/store';

  import { useFindAllBirdsQuery } from '@hooks/bird.hooks';

  get(useFindAllBirdsQuery());
</script>

<div class="prose flex flex-col dark:prose-invert">
  <h1 class="my-4">Birds</h1>
</div>
