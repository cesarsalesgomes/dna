<script lang="ts">
  import { get } from 'svelte/store';

  import { setNotificationOnSuccess } from '@features/notification/utils/notification.utils';
  import { useCreateCatMutation } from '@hooks/cat.hooks';
  import { invalidateQueriesOnSuccess } from '@utils/svelte-query.utils';

  let name: string;

  const { mutateAsync } = get(useCreateCatMutation(invalidateQueriesOnSuccess(['findAllCats'])));

  const onSubmitCatForm = async (event: Event) => {
    event.preventDefault();

    await mutateAsync({ data: { name } });

    setNotificationOnSuccess();
  };
</script>

<form action="#" method="POST" on:submit={onSubmitCatForm}>
  <div class="overflow-hidden bg-gray-200 shadow sm:rounded-md">
    <div class="px-4 py-5 sm:p-6">
      <div class="flex flex-row justify-between gap-8">
        <div class="flex flex-col">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            autoComplete="given-name"
            class="mt-1 block w-full rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
            bind:value={name}
          />
        </div>
        <div class="flex pt-5">
          <button
            type="submit"
            class="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
