<script lang="ts">

  import { DNA_BACKEND_URL } from '$constants/system.constants';
  import { getAccessToken } from '$features/auth/utils';
  import type { DirectusFiles, DirectusUsers } from '$types/directus-schema.type';

  import CircleWithNameInitials from './CircleWithNameInitials.svelte';

  export let me$: Partial<DirectusUsers> | Promise<Partial<DirectusUsers>>;

  export let accessTokenFromServer: string;

  function getUserAvatarUrl(userAvatarId: string | DirectusFiles): string {
    const accessToken = accessTokenFromServer ?? getAccessToken();

    const quality = 10; // Percentage
    const width = 32; // Pixels
    const height = 32; // Pixels

    return `${DNA_BACKEND_URL}/assets/${userAvatarId}?download=true&quality=${quality}&width=${width}&height=${height}&access_token=${accessToken}`;
  }

</script>

{#await me$}
  <CircleWithNameInitials/>
{:then me}
  {#if me.avatar}
    <img class="h-8 w-8 rounded-full bg-gray-900" src={getUserAvatarUrl(me.avatar)} alt="avatar">
  {:else }
    <CircleWithNameInitials firstName={me.first_name} lastName={me.last_name}/>
  {/if}
{:catch error}
  <CircleWithNameInitials/>
{/await}
