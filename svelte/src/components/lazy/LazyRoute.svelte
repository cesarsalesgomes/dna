<script lang="ts">
  import { Route } from 'svelte-routing';

  import Lazy from './Lazy.svelte';

  export let component: () => Promise<any>;

  let props: { [index: string]: any; };

  $: {
    const { component: TriggerComponent, ...restProps } = $$props;

    props = restProps;
  }
</script>

<Route {...props}>
  <Lazy {component}/>
</Route>
