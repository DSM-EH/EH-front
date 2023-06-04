import instance from './axios';

export const deleteRequest = async (email: string, id: number) => {
  const response = await instance.delete(`/group/request`, {
    params: {
      email,
      id,
    },
  });
  return response;
};
