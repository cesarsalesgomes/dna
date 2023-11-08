<script lang="ts">

  import { NavLink, NavLinkMobile } from '$components/buttons';
  import BellSvg from '$components/svgs/BellSvg.svelte';
  import { BIRDS_ROUTE, CATS_ROUTE } from '$constants/route.constants';
  import { logout } from '$features/auth/utils';
  import type { DirectusUsers } from '$types/directus-schema.type';

  import Avatar from './Avatar.svelte';

  export let me$: Partial<DirectusUsers> | Promise<Partial<DirectusUsers>>;

  export let accessTokenFromServer: string;

  let showMenu: boolean;
  let showUserMenu: boolean;

</script>

<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <button type="button"
          class="
            inline-flex items-center justify-center rounded-md p-2 text-gray-400
            hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
          "
          aria-controls="mobile-menu"
          aria-expanded="false"
          on:click={() => { showMenu = !showMenu; }}>
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
          <svg class="block h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
          <svg class="hidden h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <NavLink route={CATS_ROUTE} routeDescription='Cats'></NavLink>
            <NavLink route={BIRDS_ROUTE} routeDescription='Birds'></NavLink>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button"
          class="
            rounded-full bg-gray-800 p-1 text-gray-400
            hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800
          ">
          <span class="sr-only">View notifications</span>
          <BellSvg className="h-6 w-6"/>
        </button>

        <!-- Profile dropdown -->
        <div class="relative ml-3">
          <div>
            <button type="button"
              class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              on:click={() => { showUserMenu = !showUserMenu; }}>
              <span class="sr-only">Open user menu</span>
              <Avatar me$={me$} accessTokenFromServer={accessTokenFromServer}/>
            </button>
          </div>

          <!--
            Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95"
          -->
          {#if showUserMenu}
            <div class="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1">
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a href="/"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0">Your Profile</a>
              <a href="/"
                class="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1">Settings</a>
              <span
                class="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                on:click={logout}
                on:keypress={logout}
              >Sign out</span>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu, show/hide based on menu state. -->
  {#if showMenu}
    <div class="sm:hidden" id="mobile-menu">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <NavLinkMobile route={CATS_ROUTE} routeDescription='Cats'></NavLinkMobile>
        <NavLinkMobile route={BIRDS_ROUTE} routeDescription='Birds'></NavLinkMobile>
      </div>
    </div>
  {/if}
</nav>
