<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  import { Home } from '@features/home';
  import { LoginRoutes } from '@features/login';
</script>

<Router>
  <Route path="login"><LoginRoutes/></Route>
  <Route path=""><Home/></Route>
</Router>
