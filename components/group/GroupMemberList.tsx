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
  const [state, setState] = useState<number>(0);
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
    const groupId = localStorage.getItem('groupId');

    if (!groupId) return;

    getMembers(groupId)
      .then(res => {
        console.log(res);
        setMemberInformation(res.data);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, [state]);

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
        <GroupMemberModal state={state} setState={setState} {...showMember} />
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
  margin-bottom: 30px;
`;

const _MembersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const _InnerWrapper = styled.div`
  width: 580px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
