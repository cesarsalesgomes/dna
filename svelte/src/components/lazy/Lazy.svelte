<script lang="ts">
  import { onMount, SvelteComponent } from 'svelte';

  import LoadingLayout from '@components/loading/LoadingLayout.svelte';

  export let component: () => Promise<SvelteComponent>;

  let loadedComponent: any = null;
  let props: { [index: string]: any;};

  $: {
    const { component: TriggerComponent, ...restProps } = $$props;

    props = restProps;
  }

  onMount(async () => {
    loadedComponent = (await component()).default;
  });
</script>

{#if loadedComponent}
  <svelte:component this={loadedComponent} {...props} />
{:else }
  <LoadingLayout isSuspense={true}/>
{/if}
