<script lang="ts">
  import { Route } from 'svelte-routing';

  import Lazy from './Lazy.svelte';

  export let component: () => Promise<any>;

  export let hasRouteParams = false;

  let props: { [index: string]: any; };

  $: {
    const { component: TriggerComponent, ...restProps } = $$props;

    props = restProps;
  }
</script>

<Route {...props} let:params>
  {#if hasRouteParams}
    <Lazy {component} {...params}/>
  {:else}
    <Lazy {component}/>
  {/if}
</Route>
