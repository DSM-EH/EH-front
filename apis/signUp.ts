import { SignUpApiType } from '@/types/signup';
import axios from 'axios';

export const postSignUp = async (request: SignUpApiType) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, request);
  return response;
};
