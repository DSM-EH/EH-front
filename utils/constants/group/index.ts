import { StaticImageData } from 'next/image';
import { Introduce } from '@/assets';

export interface GroupItemType {
  id: number;
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  nowMember: number;
  maxMember: number;
}

export const GroupItemData: GroupItemType[] = [
  {
    id: 1,
    title: '개발할때 운동은 필수!',
    description: '운동 꾸준히 하실 분 운동 꾸준히 하실  운동 꾸준히 하실 운동 꾸준히 하실 운동 꾸준히 하실  운동 꾸준히 하실  운동 꾸준히 하실  운동 꾸준히 하실  운동 꾸준히 하실  운동 꾸준히 하실  운동 꾸준히 하실  v 운동 꾸준히 하실  운동 꾸준히 하실  운동 꾸준히 하실 운동 꾸준히 하실 운동 꾸준히 하실 운동 꾸준히 하실 운동 꾸준히 하실 운동 꾸준히 하실 운동 꾸준히 하실 운동 꾸준히 하실 ',
    imageUrl: Introduce,
    nowMember: 10,
    maxMember: 26,
  },
  {
    id: 2,
    title: '운동 같이 할 사람',
    description: '헬린이 모임소입니다.',
    imageUrl: Introduce,
    nowMember: 8,
    maxMember: 9,
  },
  {
    id: 3,
    title: '니가 그렇게 헬스를 잘해? 으잉?!',
    description: '잘하면 들어와라..',
    imageUrl: Introduce,
    nowMember: 10,
    maxMember: 21,
  },
  {
    id: 4,
    title: '소프트웨어공학 프로젝트',
    description: 'EH 파이팅',
    imageUrl: Introduce,
    nowMember: 12,
    maxMember: 26,
  },
];
