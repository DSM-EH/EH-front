import instance from './axios';

export const getGroupAll = async () => {
  const response = await instance.get('/group/all');
  return response;
};
