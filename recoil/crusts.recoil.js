import { atom } from 'recoil';

const informationToUpdateCrust = atom({
  key: 'informationToUpdateCrust',
  default: [],
});

export const recoilCrust = {
    informationToUpdateCrust
}