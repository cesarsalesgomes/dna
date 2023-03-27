<script lang="ts">
  import { onDestroy } from 'svelte';
  import { linear } from 'svelte/easing';
  import { tweened, type Tweened } from 'svelte/motion';

  import { MENU_NAVBAR_HEIGHT } from '@constants/styles.constants';
  import { FORBIDDEN_ACCESS_MODAL_DISPLAY_TIME_IN_SECONDS } from '@constants/system.constants';
  import NotificationIcon from '@features/notification/components/NotificationIcon.svelte';
  import { NotificationType } from '@features/notification/enums';
  import { setShowForbiddenAccessModalStore, showForbiddenAccessModalStore } from '@stores/show-forbidden-access-modal.store';

  const height = `calc(100vh - ${MENU_NAVBAR_HEIGHT}`;

  let progressBarWidthPercentage: Tweened<number>;

  let showModal: boolean;

  function closeModalAndGoBackToLastPageAfterAPeriod() {
    setTimeout(() => {
      setShowForbiddenAccessModalStore(false);
      window.history.go(-1);
    }, FORBIDDEN_ACCESS_MODAL_DISPLAY_TIME_IN_SECONDS * 1000);
  }

  function resetProgressBarWidthAndStartAnimation() {
    progressBarWidthPercentage = tweened(0, {
      duration: FORBIDDEN_ACCESS_MODAL_DISPLAY_TIME_IN_SECONDS * 1000,
      easing: linear,
    });

    progressBarWidthPercentage.set(100);
  }

  const unsubscribe = showForbiddenAccessModalStore.subscribe((show) => {
    if (show) {
      closeModalAndGoBackToLastPageAfterAPeriod();
      resetProgressBarWidthAndStartAnimation();
    }

    showModal = show;
  });

  onDestroy(unsubscribe);
</script>

{#if showModal}
  <div class="absolute z-30 flex w-screen items-center justify-center bg-black/25 px-4"
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
      <span aria-hidden="true" class="bg-yellow-400 absolute inset-x-0 bottom-0 h-1" style="width: {$progressBarWidthPercentage}%;" ></span>
    </div>
  </div>
{/if}
