<script lang="ts">
  import { Router } from 'svelte-routing';

  import LazyRoute from '@components/lazy/LazyRoute.svelte';

  const LoginRoutes = () => import('@features/login/routes/LoginRoutes.svelte');
  const Home = () => import('@features/home/components/Home.svelte');
</script>

<Router>
  <LazyRoute path="login" component={LoginRoutes}/>
  <LazyRoute path="" component={Home}/>
</Router>
