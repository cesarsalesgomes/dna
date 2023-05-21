<script lang="ts">
  import { get } from 'svelte/store';

  import { DIRECTUS_URL } from '@constants/directus.constants';
  import { accessTokenStore } from '@features/auth/stores';
  import { useUsersMeQuery } from '@hooks/user.hooks';

  const me = useUsersMeQuery();

  function getUserAvatarUrl(userAvatarId: string): string {
    const accessToken = get(accessTokenStore);

    const quality = 10; // Percentage
    const width = 32; // Pixels
    const height = 32; // Pixels

    if (userAvatarId) return `${DIRECTUS_URL}/assets/${userAvatarId}?download=true&quality=${quality}&width=${width}&height=${height}&access_token=${accessToken}`;

    return null; // TODO: return name initials
  }

</script>

{#if $me.isSuccess}
  <img class="h-8 w-8 rounded-full" src={getUserAvatarUrl($me.data?.users_me?.avatar?.id) } alt="">
{:else }
  <img class="h-8 w-8 rounded-full" alt="">
{/if}
