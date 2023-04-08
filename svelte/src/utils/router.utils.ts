import { get } from 'svelte/store';
import { navigate } from 'svelte-routing';

import { currentRouteStore, previousRouteStore } from '@stores/route.store';

function setPreviousRouteStore(previousRoute: string) {
  previousRouteStore.set(previousRoute);
}

export function navigateToRouteAndSetCurrentRouteStore(route: string, replace?: boolean) {
  const currentRoute = get(currentRouteStore);

  setPreviousRouteStore(currentRoute || window.location.pathname);
  navigate(route, { replace });

  currentRouteStore.set(route);
}
