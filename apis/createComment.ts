import instance from './axios';

export const createComment = async (userId: string, postId: string, content: string) => {
  const response = await instance.post('/post/comment', {
    user_id: userId,
    post_id: postId,
    content: content,
  });
  return response;
};
