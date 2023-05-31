import instance from './axios';

export const getMembers = async (id: string) => {
  const response = await instance.get(`/group/member`, {
    params: {
      id,
    },
  });
  return response;
};
