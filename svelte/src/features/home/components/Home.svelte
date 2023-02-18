<script lang="ts">
  import { onMount } from 'svelte';

  import { navigateToLoginIfUserNotAuthenticated } from '@features/auth/utils/auth.utils';

  import { HomeRoutes } from '../routes';

  let userAuthenticated: boolean;

  // OnMount necessary to trigger tick to 'navigate' if user not authenticated
  onMount(() => {
    userAuthenticated = !!navigateToLoginIfUserNotAuthenticated();
  });
</script>

{#if userAuthenticated}
  <HomeRoutes></HomeRoutes>
{/if}
