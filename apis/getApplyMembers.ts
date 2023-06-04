import instance from './axios';

export const getApplyMembers = async (groupId: string) => {
  const response = await instance.get(`/group/request`, {
    params: {
      id: groupId,
    },
  });
  return response;
};
