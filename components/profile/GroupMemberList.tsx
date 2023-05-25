import styled from '@emotion/styled';
import { Expansion } from '@/assets';
import Image from 'next/image';
import { members } from '@/utils/constants/member';
import GroupMemberListItem from './GroupMemberListItem';

interface PropsType {
  title: string;
  isLoading: boolean;
}

const GroupMemberList = ({ title, isLoading }: PropsType) => {
  return (
    <_Wrapper>
      <_UpperWrapper>
        <_Title>{title}</_Title>
        <_VectorImage src={Expansion} alt="vector" />
      </_UpperWrapper>
      {members.map(element => (
        <GroupMemberListItem isLoading={isLoading} key={element.id} {...element} />
      ))}
    </_Wrapper>
  );
};

export default GroupMemberList;

const _Wrapper = styled.div`
  width: 340px;
  height: 430px;
  padding: 30px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
