import instance from './axios';

export const getGroupPosts = async (id: string) => {
  const response = await instance.get(`/group/posts`, {
    params: {
      id,
    },
  });
  return response;
};
