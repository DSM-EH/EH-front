import styled from '@emotion/styled';
import Wrapper from '../common/wrapper';
import { GroupItemType, GroupItemData } from '@/utils/constants/group';
import { getMyGroup } from '@/apis/getMyGroup';
import ProfileGroupItem from './GroupItem';
import { useEffect, useState } from 'react';

interface GroupType {
  id: number;
  title: string;
  profile_image: string;
  background_image: string;
  description: string;
  poster_image: string;
  max_people: number;
  set_time: string;
}

const ProfileGroupList = () => {
  const [groupItems, setGroupItems] = useState<GroupType[]>([]);

  useEffect(() => {
    getMyGroup().then(res=> {
      console.log(res.data);
      setGroupItems(res.data);
    }).catch((err: unknown) => {
      console.error(err);
    })
  }, [])

  return (
    <_Wrapper>
      <_Title>참여한 그룹</_Title>
      <_GroupListWrapper>
        {groupItems.map((element: GroupType) => (
          <ProfileGroupItem key={element.id} {...element} />
        ))}
      </_GroupListWrapper>
    </_Wrapper>
  );
};

export default ProfileGroupList;

const _Wrapper = styled.aside`
  width: 100%;
  padding: 70px 0;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title3};
  margin-bottom: 35px;
  color: ${({ theme }) => theme.color.black};
`;

const _GroupListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;
