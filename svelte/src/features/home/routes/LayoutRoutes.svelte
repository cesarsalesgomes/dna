<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  
  import Cats from '../../cats/components/Cats.svelte';
  import NotFound from '../components/NotFound.svelte';
</script>

<Router>
  <Route path="cats"><Cats/></Route>
  <Route path="*"><NotFound/></Route>
</Router>