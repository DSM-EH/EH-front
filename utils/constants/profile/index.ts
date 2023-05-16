import { Main01 } from '@/assets';
import { ProfileType } from '@/types/profile';

export const mypage: ProfileType = {
  imageUrl: Main01,
  name: '차은우',
  introduce: '안녕하세요 차은우입니다.',
  myProfile: true,
};

export const otherProfile: ProfileType = {
  imageUrl: Main01,
  name: '이준범',
  introduce: '안녕하세요 이준범입니다.',
  myProfile: false,
};
