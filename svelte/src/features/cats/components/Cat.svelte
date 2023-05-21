<script lang="ts">
  import { HOME_ROUTE } from '@constants/route.constants';
  import { useCatByIdQuery } from '@hooks/cat.hooks';
  import { navigateToRouteAndSetCurrentRouteStore } from '@utils/router.utils';

  export let id: string;

  const catById = useCatByIdQuery({ data: id });

</script>

<div class="prose mt-4 dark:prose-invert">
  <button type="button" on:click={() => navigateToRouteAndSetCurrentRouteStore(HOME_ROUTE)} >
    Back
  </button>
  <h1>{$catById.data?.cat_by_id?.name || ''}</h1>
</div>
