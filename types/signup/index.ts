import { StaticImageData } from 'next/image';

export interface SignUpType {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  profileImageUrl: string | StaticImageData;
}
