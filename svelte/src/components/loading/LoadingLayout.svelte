<script lang="ts">
  import { MENU_NAVBAR_HEIGHT } from '@constants/styles.constants';

  import LoadingSpinner from './spinner/LoadingSpinner.svelte';

  export let isSuspense: boolean;

  const height = `calc(100vh${isSuspense ? '' : ` - ${MENU_NAVBAR_HEIGHT}`})`;
</script>

<div
  class="absolute z-50 flex w-screen items-center justify-center bg-black opacity-25"
  style="height: {height};"
>
  <LoadingSpinner tailwindClasses='h-16 w-16' />
</div>
