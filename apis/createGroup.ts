import { CreateGroupApiType } from '@/types/group';
import instance from './axios';

export const createGroupApi = (info: CreateGroupApiType) => {
  const response = instance.post('/group', info);
  return response;
};
