<script lang="ts">
  import { onDestroy } from 'svelte';

  import { useFindAllBirdsQuery } from '@hooks/bird.hooks';

  const birdsSubscription = useFindAllBirdsQuery().subscribe(() => { });

  onDestroy(() => { birdsSubscription(); });
</script>

<div class="prose flex flex-col dark:prose-invert">
  <h1 class="my-4">Birds</h1>
</div>
