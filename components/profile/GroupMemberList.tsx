import styled from '@emotion/styled';
import { Expansion } from '@/assets';
import GroupMemberListItem from './GroupMemberListItem';
import { useEffect, useState } from 'react';
import { getMembers } from '@/apis/getMembers';
import { customToast } from '@/utils/toast/toast';
import Image from 'next/image';

interface PropsType {
  title: string;
  isLoading: boolean;
  onClick?: () => void;
  state: boolean;
}

interface MemberType {
  id: number;
  email: string;
  password: string;
  nickname: string;
  description: string;
  profile_image_url: string;
}

const GroupMemberList = ({ title, isLoading, onClick, state }: PropsType) => {
  const [member, setMember] = useState<MemberType[]>([]);

  useEffect(() => {
    const id: string | null = localStorage.getItem('groupId');
    if (!id) {
      customToast('잘못된 접근입니다.', 'error');
      return;
    }
    getMembers(id)
      .then(res => {
        const { data } = res;
        const email: string | null = localStorage.getItem('email');

        if (!email) {
          customToast('잘못된 접근입니다.', 'error');
          return;
        }

        setMember(data);
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('개발자 에러', 'error');
      });
  }, [state]);

  return (
    <_Wrapper>
      <_UpperWrapper>
        <_Title>{title}</_Title>
        <_VectorImage src={Expansion} onClick={onClick} alt="vector" />
      </_UpperWrapper>
      {member.map(element => (
        <GroupMemberListItem isLoading={isLoading} key={element.id} {...element} />
      ))}
    </_Wrapper>
  );
};

export default GroupMemberList;

const _Wrapper = styled.div`
  width: 340px;
  min-height: 430px;
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
