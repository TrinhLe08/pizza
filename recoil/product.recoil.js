import { atom } from 'recoil';

const informationToUpdateProduct= atom({
  key: 'informationToUpdateProduct',
  default: [],
}); 

export const recoilProduct = {
    informationToUpdateProduct
}