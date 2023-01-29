<script lang="ts">
  import { onDestroy, onMount } from 'svelte';
  import type { Unsubscriber } from 'svelte/store';

  import { navigateToLoginIfUserNotAuthenticated } from '@features/auth/utils/auth.utils';

  import { HomeRoutes } from '../routes';

  let accessTokenStoreUnsubscriber: Unsubscriber;

  onMount(() => {
    accessTokenStoreUnsubscriber = navigateToLoginIfUserNotAuthenticated();
  });

  onDestroy(() => {
    accessTokenStoreUnsubscriber();
  });
</script>

<HomeRoutes></HomeRoutes>
