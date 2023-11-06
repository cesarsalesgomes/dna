import type InvalidateKeys from '$enums/invalidate-keys.enum';
import { decrementFetchesBeingPerformed, incrementFetchesBeingPerformed } from '$stores/fetches-being-performed.store';

import { invalidate } from '$app/navigation';

export const invalidateWithLoading = async (key: InvalidateKeys) => {
  incrementFetchesBeingPerformed();

  try {
    await invalidate(key);
  } catch (error) {
    /* empty */
  }

  decrementFetchesBeingPerformed();
};
