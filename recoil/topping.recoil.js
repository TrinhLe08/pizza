import { atom } from 'recoil';

const informationToUpdateToppings = atom({
  key: 'informationToUpdateToppings',
  default: [],
});

export const recoilToppings = {
    informationToUpdateToppings
}