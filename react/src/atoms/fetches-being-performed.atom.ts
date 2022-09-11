import { atom } from 'jotai';

export const fetchesBeingPerformedAtom = atom<number>(0);

export const incrementFetchesBeingPerformedAtom = atom(
  null,
  (get, set) => set(fetchesBeingPerformedAtom, get(fetchesBeingPerformedAtom) + 1)
);

export const decrementFetchesBeingPerformedAtom = atom(
  null,
  (get, set) => set(fetchesBeingPerformedAtom, get(fetchesBeingPerformedAtom) - 1)
);