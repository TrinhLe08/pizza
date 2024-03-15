import { atom } from 'recoil';

const router = atom({
  key: 'router',
  default: 'login-page',
});

export const recoilRouter = {
    router
}