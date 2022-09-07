import { SetStateAction } from 'react';

export function resetStringAtom(setStringAtom: (update: SetStateAction<string>) => void) {
  setStringAtom('');
}