import { ModifyProfileType } from '@/types/modify';
import instance from './axios';

export const modifyProfile = (data: ModifyProfileType) => {
  const response = instance.patch('/user', data);
  return response;
};
