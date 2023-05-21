<script lang="ts">
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  import { DirectusRequestOptions } from '@config/svelte-query/directus/directus-config-options';
  import { authLoginHandler } from '@features/auth/utils';
  import { useAuthRefreshMutation } from '@hooks/auth.hooks';

  DirectusRequestOptions.options = { credentials: 'include' };

  const { mutateAsync } = get(useAuthRefreshMutation());

  onMount(async () => {
    const accessToken = (await mutateAsync({})).auth_refresh.access_token;

    authLoginHandler(accessToken);
  });

</script>
