import { get } from 'svelte/store';
import { navigate } from 'svelte-routing';

import { currentRouteStore, previousRouteStore } from '@stores/route.store';

function setPreviousRouteStore(previousRoute: string) {
  previousRouteStore.set(previousRoute);
}

export function navigateToRouteAndSetCurrentRouteStore(route: string, replace?: boolean) {
  navigate(route, { replace });
  setPreviousRouteStore(get(currentRouteStore));

  currentRouteStore.set(route);
}
