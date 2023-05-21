<script lang="ts">
  import { Router } from 'svelte-routing';

  const Cat = () => import('@features/cats/components/Cat.svelte');
  const Cats = () => import('@features/cats/components/Cats.svelte');

  import LazyRoute from '@components/lazy/LazyRoute.svelte';

</script>

<Router>
  <LazyRoute path="/:id" component={Cat} hasRouteParams/>
  <LazyRoute path="/" component={Cats}/>
</Router>
