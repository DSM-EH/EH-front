import styled from '@emotion/styled';
import Wrapper from '../common/wrapper';
import { GroupItemType, GroupItemData } from '@/utils/constants/group';
import ProfileGroupItem from './GroupItem';

const ProfileGroupList = () => {
  return (
    <_Wrapper>
      <_Title>참여한 그룹</_Title>
      <_GroupListWrapper>
        {GroupItemData.map((element: GroupItemType) => (
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
