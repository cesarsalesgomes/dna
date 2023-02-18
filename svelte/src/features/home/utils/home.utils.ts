import { navigate } from 'svelte-routing';

export function navigateToUserHome() {
  navigate('/cats', { replace: true });
}
