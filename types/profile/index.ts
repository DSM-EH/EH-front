import { StaticImageData } from 'next/image';

export interface ProfileType {
  imageUrl: string | StaticImageData;
  name: string;
  introduce: string;
  myProfile: boolean;
}
export interface ProfileApiType {
  id: number;
  email: string;
  password: string;
  nickname: string;
  description: string;
  profile_image_url: string;
}

