import { StaticImageData } from 'next/image';

export interface CreateGroupType {
  title: string;
  imageUrl: string;
  introduce: string;
  groupBackgroundImageUrl: string;
  contents: string;
  posterImageUrl: string;
  member: number;
  time: string;
}

export interface GroupType {
  id: number;
  title: string;
  profile_image: string;
  background_image: string;
  description: string;
  poster_image: string;
  max_people: number;
  set_time: string;
  owner: any;
}

export interface CreateGroupApiType {
  email: string;
  title: string;
  profile_image: string;
  background_image: string;
  description: string;
  poster_image: string;
  max_people: number;
  set_time: Date;
}

export interface GetGroupApiType {
  background_image: string;
  description: string;
  id: number;
  max_people: number;
  owner: {
    id: number;
    email: string;
    password: string;
    nickname: string;
    description: string;
    profile_image_url: string;
  };
  poster_image: string;
  profile_image: string;
  set_time: Date;
  title: string;
}
