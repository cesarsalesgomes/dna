<script lang="ts">
  import { onMount } from 'svelte';
  import { Router, Route } from 'svelte-routing';

  import Cats from '@features/cats/components/Cats.svelte';

  import NotFound from '../components/NotFound.svelte';
  import { navigateToUserHome } from '../utils/home.utils';

  onMount(() => navigateToUserHome());
</script>

<Router>
  <Route path="cats"><Cats/></Route>
  <Route path="*"><NotFound/></Route>
</Router>
