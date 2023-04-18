import styled from '@emotion/styled';
import { MemberListType, MemberType } from '@/types/member';
import Member from './Member';

const MemberList = (props: MemberListType) => {
  const { title, members }: MemberListType = props;
  
  return (
    <_Wrapper>
      <_Title>{title}</_Title>
      <_MemberWrapper>
        {members.map((member: MemberType) => (
          <Member key={member.id} user={member} />
        ))}
      </_MemberWrapper>
    </_Wrapper>
  );
};

export default MemberList;

const _Wrapper = styled.div`
  width: 340px;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  justify-content: space-around;
  background-color: ${props => props.theme.color.background};
  border-radius: 5px;
`;

const _Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.title3};
`;

const _MemberWrapper = styled.div`
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;
