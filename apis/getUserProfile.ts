import instance from './axios';

export const getUserProfile = async (email: string) => {
  const response = await instance.get('/user', {
    params: {
      email,
    },
  });
  return response;
};
