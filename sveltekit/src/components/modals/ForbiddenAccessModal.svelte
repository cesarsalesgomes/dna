<script lang="ts">
  import { MENU_NAVBAR_HEIGHT } from '$constants/styles.constants';
  import NotificationIcon from '$features/notification/components/NotificationIcon.svelte';
  import { NotificationType } from '$features/notification/enums';
  import { setShowForbiddenAccessModalStore, showForbiddenAccessModalStore } from '$stores/show-forbidden-access-modal.store';
  import { checkIfNavigatedToDifferentRoute } from '$utils/route.utils';

  import { navigating } from '$app/stores';

  const height = `calc(100vh - ${MENU_NAVBAR_HEIGHT}`;

  // Hide modal with route change to a different path
  navigating.subscribe((nav) => {
    if (nav && checkIfNavigatedToDifferentRoute(nav)) setShowForbiddenAccessModalStore(false);
  });

</script>

{#if $showForbiddenAccessModalStore}
  <div class="absolute z-10 flex w-screen items-center justify-center bg-black/25 px-4"
    style="height: {height};"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true">
    <div class="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
      <div class="sm:flex sm:items-start">
        <div class="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <NotificationIcon type={NotificationType.ALERT}/>
        </div>
        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Forbidden access</h3>
          <div class="mt-2">
            <p class="text-sm text-gray-500">You&#39;re not allowed to access this.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
