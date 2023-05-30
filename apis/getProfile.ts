import instance from './axios';

export const getProfile = async () => {
  const email = localStorage.getItem('email');
  const response = await instance.get('/user', {
    params: {
      email,
    },
  });
  return response;
};
