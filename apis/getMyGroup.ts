import instance from './axios';

export const getMyGroup = async () => {
  const email = localStorage.getItem('email');
  const response = await instance.get(`/group/mygroup`, {
    params: {
      email,
    },
  });
  return response;
};
