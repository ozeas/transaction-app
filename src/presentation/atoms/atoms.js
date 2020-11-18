import { atom } from 'recoil';

export const transactionListAtom = atom({
  key: 'transactionListAtom',
  default: [],
});

export const warningApplicationAtom = atom({
  key: 'warningApplicationAtom',
  default: {
    enable: false,
    message: '',
  },
});
