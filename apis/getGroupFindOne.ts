import instance from './axios';

export const getGroupFindOne = async (id: string) => {
  const response = await instance.get(`/group`, {
    params: {
      id,
    },
  });
  return response;
};
