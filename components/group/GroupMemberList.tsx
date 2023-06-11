import styled from '@emotion/styled';
import { useState } from 'react';
import { Members } from '@/utils/constants/member/member';
import GroupMember from './GroupMember';
import { useEffect } from 'react';
import { getMembers } from '@/apis/getMembers';
import GroupMemberModal from '../common/modal/GroupMemberModal';

interface PropsType {
  title: string;
}

interface MemberInformationType {
  id: number;
  email: string;
  password: string;
  nickname: string;
  description: string;
  profile_image_url: string;
}

const GroupMemberList = ({ title }: PropsType) => {
  const [memberInformation, setMemberInformation] = useState<MemberInformationType[]>([]);
  const [showMember, setShowMember] = useState<MemberInformationType>({
    id: -1,
    email: '',
    password: '',
    nickname: '',
    description: '',
    profile_image_url: '',
  });

  const onClick = (information: MemberInformationType) => {
    setShowMember(information);
  };
  useEffect(() => {
    const groupId: string | null = localStorage.getItem('groupId');

    if (!groupId) return;

    getMembers(groupId)
      .then(res => {
        console.log(res);
        setMemberInformation(res.data);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  return (
    <_Wrapper>
      <_Title>{title}</_Title>
      <_SmallTitle>그룹 멤버 💪🏻</_SmallTitle>
      <_MembersWrapper>
        <_InnerWrapper>
          {memberInformation.map((member: MemberInformationType) => (
            <GroupMember key={member.id} {...member} onClick={onClick} />
          ))}
        </_InnerWrapper>
        {showMember.id !== -1 && <GroupMemberModal {...showMember} />}
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
  width: 45%;
  justify-content: space-between;
`;
