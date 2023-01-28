<script lang="ts">
  import { onMount } from 'svelte';

  import { navigateToLoginIfUserNotAuthenticated } from '@features/auth/utils/auth.utils';

  import { HomeRoutes } from '../routes';

  onMount(() => {
    navigateToLoginIfUserNotAuthenticated();
  });
</script>

<HomeRoutes></HomeRoutes>
