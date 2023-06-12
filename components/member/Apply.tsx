import { getApplyMembers } from '@/apis/getApplyMembers';
import { Expansion } from '@/assets';
import { customToast } from '@/utils/toast/toast';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import GroupMemberListItem from '../profile/GroupMemberListItem';
import { useModal } from '@/hooks/useModal';
import { useQuery } from 'react-query';

interface MemberType {
  id: number;
  user: {
    id: number;
    email: string;
    password: string;
    nickname: string;
    description: string;
    profile_image_url: string;
  };
}

interface PropsType {
  isLoading: boolean;
  state: boolean;
}

const Apply = ({ isLoading, state }: PropsType) => {
  const { openModal } = useModal('Apply');

  const onClick = (id: number) => {
    const userId = id;
    localStorage.setItem('userId', String(userId));
    openModal();
  };

  const { data: member, refetch } = useQuery<MemberType[]>('applyMembers', async () => {
    const groupId = localStorage.getItem('groupId');

    if (!groupId) {
      customToast('잘못된 접근입니다.', 'error');
      return Promise.reject(new Error('잘못된 접근입니다.'));
    }

    return getApplyMembers(groupId)
      .then(res => res.data)
      .catch((err: unknown) => console.error(err));
  });

  useEffect(() => {
    refetch();
  }, [state]);

  return (
    <_Wrapper>
      <_UpperWrapper>
        <_Title>신청 멤버</_Title>
        <_VectorImage src={Expansion} onClick={() => console.log('test')} alt="vector" />
      </_UpperWrapper>
      {member?.map((item: MemberType) => (
        <GroupMemberListItem
          onClick={() => onClick(item.user.id)}
          key={item.user.id}
          {...item.user}
          isLoading={isLoading}
        />
      ))}
    </_Wrapper>
  );
};

export default Apply;

const _Wrapper = styled.div`
  width: 340px;
  height: 430px;
  padding: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  margin-bottom: 95px;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title3};
`;

const _UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const _VectorImage = styled(Image)`
  cursor: pointer;
`;
