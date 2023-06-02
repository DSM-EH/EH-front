import axios from 'axios';

export const uploadImage = async (imageFile: any) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/image`, imageFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};
