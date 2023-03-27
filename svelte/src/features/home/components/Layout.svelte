<script>
  import { LoadingLayoutOnFetching } from '@components/loading';
  import ForbiddenAccessModal from '@components/modals/ForbiddenAccessModal.svelte';

  import LayoutRoutes from '../routes/LayoutRoutes.svelte';
</script>

<div class="flex flex-col">
  <ForbiddenAccessModal/>
  <LoadingLayoutOnFetching/>
  <div class="px-4 sm:px-12 md:px-24 lg:px-36 xl:px-48 2xl:px-60">
    <LayoutRoutes />
  </div>
</div>
