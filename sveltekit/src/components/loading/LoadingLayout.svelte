<script lang="ts">
  import { MENU_NAVBAR_HEIGHT } from '$constants/styles.constants';

  import LoadingSpinner from './spinner/LoadingSpinner.svelte';

  const height = `calc(100vh - ${MENU_NAVBAR_HEIGHT})`;
</script>

<div
  class="fixed left-0 z-10 flex w-screen items-center justify-center bg-black opacity-25"
  style="height: {height}; top: {MENU_NAVBAR_HEIGHT}"
>
  <LoadingSpinner tailwindClasses='h-16 w-16' />
</div>
