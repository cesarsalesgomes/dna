import { writable } from 'svelte/store';

export const lazyLoadingStore = writable<boolean>();
