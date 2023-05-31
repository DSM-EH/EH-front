import axios from 'axios';

export const uploadImage = async (imageFile: any) => {
  const accessToken: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOGIyNzE4MzEtY2NlZi00ZjZlLWI3MmItNjE1ZTZkZWYxMjRmIiwiaWF0IjoxNjg1NDI4OTg1LCJleHAiOjE2ODU0MzI1ODUsImlzcyI6InZlbG9nLmlvIiwic3ViIjoiYWNjZXNzX3Rva2VuIn0.O3yVXFq407HmiTDnaOT5ES4sx9ixOdOeJ_cxcKPdAYU';
  const response = await axios.post(`https://v2.velog.io/api/v2/files/upload`, imageFile, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response;
};
