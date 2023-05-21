import { navigateToRouteAndSetCurrentRouteStore } from '@utils/router.utils';

export function navigateToUserHome() {
  navigateToRouteAndSetCurrentRouteStore('/cats', true);
}
