import instance from './axios';

export const getComment = async (id: string) => {
  const response = await instance.get('/post/comment', {
    params: {
      id,
    },
  });
  return response;
};
