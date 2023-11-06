import { writable } from 'svelte/store';

export const fetchesBeingPerformedStore = writable(0);

export const incrementFetchesBeingPerformed = () => fetchesBeingPerformedStore.update((n) => n + 1);

export const decrementFetchesBeingPerformed = () => fetchesBeingPerformedStore.update((n) => (n > 0 ? n - 1 : 0));
