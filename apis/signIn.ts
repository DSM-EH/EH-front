import axios from 'axios';
import { LoginType } from '@/types/login';

export const postSignIn = async (info: LoginType) => {
  const resposne = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user/signin`, info);
  return resposne;
};
