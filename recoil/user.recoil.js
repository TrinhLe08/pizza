import { atom } from 'recoil';

const informationToUpdateUser = atom({
  key: 'informationToUpdateUser',
  default: [],
});

export const recoilUser = {
    informationToUpdateUser
}