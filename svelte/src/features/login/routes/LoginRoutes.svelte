<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import Login from '../components/Login.svelte';
</script>

<Router>
  <Route path=""><Login/></Route>
</Router>
