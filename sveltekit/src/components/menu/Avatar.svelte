<script lang="ts">

  import { readMe } from '@directus/sdk';
  // eslint-disable-next-line import/no-extraneous-dependencies
  import { onMount } from 'svelte';

  import { DNA_BACKEND_URL } from '$constants/system.constants';
  import { getAccessToken } from '$features/auth/utils';
  import { DirectusClientSdk } from '$lib/directus';
  import { getFirstLetterUppercase } from '$utils/string.utils';

  let userAvatarId: string;
  let firstName = '';
  let lastName = '';

  function getUserAvatarUrl(): string {
    const accessToken = getAccessToken();

    const quality = 10; // Percentage
    const width = 32; // Pixels
    const height = 32; // Pixels

    // TODO: return name initials if null
    return `${DNA_BACKEND_URL}/assets/${userAvatarId}?download=true&quality=${quality}&width=${width}&height=${height}&access_token=${accessToken}`;
  }

  onMount(async () => {
    const me = await DirectusClientSdk.request(readMe({ fields: ['avatar', 'first_name', 'last_name'] }));

    if (me) {
      userAvatarId = me.avatar as string;
      firstName = me.first_name ?? '';
      lastName = me.last_name ?? '';
    }
  });

</script>

{#if userAvatarId}
  <img class="h-8 w-8 rounded-full" src={getUserAvatarUrl()} alt="">
{:else }
  <div class="flex justify-center items-center tracking-widest h-8 w-8 rounded-full bg-gray-900 text-white text-sm font-medium">
    {getFirstLetterUppercase(firstName) + getFirstLetterUppercase(lastName)}
  </div>
{/if}
