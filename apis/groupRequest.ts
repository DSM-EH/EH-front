import { RequestType } from '@/types/request';
import instance from './axios';

export const groupRequest = async (info: RequestType) => {
  const response = await instance.post(`/group/request`, info);
  return response;
};
