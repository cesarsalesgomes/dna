import { navigate } from 'svelte-routing';

import { currentRouteStore } from '@stores/current-route.store';

export function navigateToRouteAndSetCurrentRouteStore(route: string, replace?: boolean) {
  navigate(route, { replace });

  currentRouteStore.set(route);
}
