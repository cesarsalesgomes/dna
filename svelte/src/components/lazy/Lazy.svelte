<script lang="ts">
  import { onMount, SvelteComponent } from 'svelte';

  import { lazyLoadingStore } from '@stores/lazy-loading.store';

  export let component: () => Promise<SvelteComponent>;

  let loadedComponent: any = null;
  let props: { [index: string]: any;};

  $: {
    const { component: TriggerComponent, ...restProps } = $$props;

    props = restProps;
  }

  onMount(async () => {
    lazyLoadingStore.set(true);

    loadedComponent = (await component()).default;

    lazyLoadingStore.set(false);
  });
</script>

{#if loadedComponent}
  <svelte:component this={loadedComponent} {...props} />
{/if}
