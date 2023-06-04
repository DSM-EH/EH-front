import instance from './axios';

export const acceptRequest = async (email: string, id: number) => {
  const response = await instance.patch(`/group/request?email=${email}&id=${id}`);
  return response;
};
