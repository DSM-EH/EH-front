import { uploadImage } from '@/apis/uploadImage';
import { useState, useCallback } from 'react';

export const useUpload = () => {
  const [image, setImage] = useState<string | null>(null);

  const upload = useCallback(async (file: File, info: { type: 'post'; refId?: string }) => {
    const { data } = await uploadImage(file);
    setImage(data.path);
    return data.path;
  }, []);

  return { image, upload };
};
