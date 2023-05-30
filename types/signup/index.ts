import { StaticImageData } from 'next/image';

export interface SignUpType {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  profileImageUrl: string;
}

export interface SignUpApiType {
  nickname: string;
  email: string;
  password: string;
  description: string;
  profile_image_url: string;
}
