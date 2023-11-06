<script>
  import LoadingLayoutOnFetching from '$components/loading/LoadingLayoutOnFetching.svelte';
  import Menu from '$components/menu/Menu.svelte';
  import ForbiddenAccessModal from '$components/modals/ForbiddenAccessModal.svelte';

  export let data;
</script>

<Menu me$={data.streamed.me$} accessTokenFromServer={data.accessToken}/>
<LoadingLayoutOnFetching/>
<ForbiddenAccessModal/>
<div class="px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-60">
  <slot />
</div>
