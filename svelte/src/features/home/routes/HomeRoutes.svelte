<script lang="ts">
  import { Router, Route } from 'svelte-routing';
  
  import MenuLayout from '../components/MenuLayout.svelte';
</script>

<Router >
  <Route path=""><MenuLayout/></Route>
</Router>