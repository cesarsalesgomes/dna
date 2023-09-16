<script lang="ts">
  // eslint-disable-next-line import/extensions, import/no-unresolved
  import { page } from '$app/stores';

  // eslint-disable-next-line import/no-mutable-exports
  export let route: string;
  // eslint-disable-next-line import/no-mutable-exports
  export let routeDescription: string;

  $: onRoute = $page.url.pathname === route;

</script>

{#if onRoute}
  <a href={route} class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">{routeDescription}</a>
{:else}
  <a href={route} class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">{routeDescription}</a>
{/if}
