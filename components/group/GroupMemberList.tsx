import styled from '@emotion/styled';
import { useState } from 'react';
import { Members } from '@/utils/constants/member/member';
import GroupMember from './GroupMember';

interface PropsType {
  title: string;
}

interface MemberInformationType {
  name: string;
  profileImageUrl: string;
}

const GroupMemberList = ({ title }: PropsType) => {
  const [memberInformation, setMemberInformation] = useState<MemberInformationType>({
    name: '',
    profileImageUrl: '',
  });

  const onClick = () => {};

  return (
    <_Wrapper>
      <_Title>{title.split('-').join(' ')}</_Title>
      <_SmallTitle>그룹 멤버 💪🏻</_SmallTitle>
      <_MembersWrapper>
        <_InnerWrapper>
          {Members.map(member => (
            <GroupMember key={member.id} {...member} onClick={onClick} />
          ))}
        </_InnerWrapper>
      </_MembersWrapper>
    </_Wrapper>
  );
};

export default GroupMemberList;

const _Wrapper = styled.div`
  width: 100vw;
  padding: 50px 250px;
`;

const _Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.title1};
  margin-bottom: 30px;
`;

const _SmallTitle = styled.p`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.title3};
`;

const _MembersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const _InnerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 40%;
`;
