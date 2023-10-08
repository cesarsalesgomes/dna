<script>
  // eslint-disable-next-line import/extensions, import/no-unresolved
  import { page } from '$app/stores';

</script>

<h1>{ $page.error?.message || 'Error' }</h1>
