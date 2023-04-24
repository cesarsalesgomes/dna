<script lang="ts">
  import { Router, Route } from 'svelte-routing';

  const GoogleLogin = () => import('@features/login/components/GoogleLogin.svelte');
  import LazyRoute from '@components/lazy/LazyRoute.svelte';

  import Login from '../components/Login.svelte';

</script>

<Router>
  <LazyRoute path="/google" component={GoogleLogin}/>
  <Route path=""><Login/></Route>
</Router>
