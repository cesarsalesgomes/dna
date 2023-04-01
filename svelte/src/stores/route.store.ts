import { writable } from 'svelte/store';

export const currentRouteStore = writable('');

export const previousRouteStore = writable('');
