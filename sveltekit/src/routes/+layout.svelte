<script>
  import LoadingLayoutOnFetching from '$components/loading/LoadingLayoutOnFetching.svelte';
  import Menu from '$components/menu/Menu.svelte';
  import ForbiddenAccessModal from '$components/modals/ForbiddenAccessModal.svelte';
  import { LOGIN_ROUTE } from '$constants/route.constants';
  import { Notification } from '$features/notification/components';

  // eslint-disable-next-line import/extensions, import/no-unresolved
  import { page } from '$app/stores';

  import './styles.css';

  $: onLoginRoute = $page.url.pathname.includes(LOGIN_ROUTE);
</script>

<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
  <Notification/>
  {#if onLoginRoute}
    <slot/>
  {:else}
    <Menu/>
    <LoadingLayoutOnFetching/>
    <ForbiddenAccessModal/>
    <div class="px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-60">
      <slot />
    </div>
  {/if}
</main>
