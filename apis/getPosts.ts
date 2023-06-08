import instance from './axios';

export const getPostsApi = async (id: string) => {
  const response = await instance.get('/post', {
    params: {
      id,
    },
  });
  return response;
};
