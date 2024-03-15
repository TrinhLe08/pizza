import { atom } from 'recoil';

const informationToUpdateCategories = atom({
  key: 'informationToUpdateCategories',
  default: [],
});

export const recoilCategories = {
    informationToUpdateCategories
}
