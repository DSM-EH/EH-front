import { StaticImageData } from 'next/image';

export interface CreateGroupType {
  title: string;
  imageUrl: string | StaticImageData;
  introduce: string;
  groupBackgroundImageUrl: string | StaticImageData;
  contents: string;
  posterImageUrl: string | StaticImageData;
  member: number;
  time: string;
}
