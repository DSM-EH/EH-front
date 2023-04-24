import styled from '@emotion/styled';
import { MemberType } from '@/types/member';
import Image from 'next/image';

const Member = (props: MemberType) => {
  const { name, imageUrl }: MemberType = props;
  return (
    <_Wrapper>
      <_ProfileImage src={imageUrl} alt={name} width={50} height={50} />
      <_NameText>{name}</_NameText>
    </_Wrapper>
  );
};

export default Member;

const _Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 7px 12px;
  align-items: center;
`;

const _ProfileImage = styled(Image)`
  border-radius: 5px;
  margin-right: 35px;
`;

const _NameText = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.black};
`;
