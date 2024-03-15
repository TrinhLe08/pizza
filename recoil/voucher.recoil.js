import { atom } from 'recoil';

const informationToUpdateVoucher = atom({
  key: 'informationToUpdateVoucher',
  default: [],
});

export const recoilVoucher = {
    informationToUpdateVoucher
}