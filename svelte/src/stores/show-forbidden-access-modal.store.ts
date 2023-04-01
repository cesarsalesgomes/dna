import { writable } from 'svelte/store';

export const showForbiddenAccessModalStore = writable<boolean>();

export const setShowForbiddenAccessModalStore = (show: boolean) => showForbiddenAccessModalStore.set(show);
