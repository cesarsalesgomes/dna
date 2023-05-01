<script lang="ts">
  import { Router } from 'svelte-routing';

  const Birds = () => import('@features/birds/components/Birds.svelte');
  const Cats = () => import('@features/cats/routes/CatRoutes.svelte');
  const NavigateToHome = () => import('../components/NavigateToHome.svelte');
  const NotFound = () => import('../components/NotFound.svelte');

  import LazyRoute from '@components/lazy/LazyRoute.svelte';
</script>

<Router>
  <LazyRoute path="/cats/*" component={Cats}/>
  <LazyRoute path="/birds" component={Birds}/>
  <LazyRoute path="/" component={NavigateToHome}/>
  <LazyRoute path="*" component={NotFound}/>
</Router>
