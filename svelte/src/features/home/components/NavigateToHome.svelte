<script lang="ts">
  import { onMount } from 'svelte';

  import { HOME_ROUTE } from '@constants/route.constants';
  import { navigateToRouteAndSetCurrentRouteStore } from '@utils/router.utils';

  onMount(() => {
    navigateToRouteAndSetCurrentRouteStore(HOME_ROUTE, true);
  });
</script>
