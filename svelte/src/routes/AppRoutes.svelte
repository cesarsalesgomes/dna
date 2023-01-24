<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import HomeRoutes from '../features/home/routes/HomeRoutes.svelte';
  import LoginRoutes from '../features/login/routes/LoginRoutes.svelte';
</script>

<Router>
  <Route path="login"><LoginRoutes/></Route>
  <Route path=""><HomeRoutes/></Route>
</Router>