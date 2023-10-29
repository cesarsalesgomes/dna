import type { Navigation } from '@sveltejs/kit';

export function checkIfNavigatedToDifferentRoute({ from, to }: Navigation): boolean {
  return from?.route.id !== to?.route.id;
}
