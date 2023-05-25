import styled from '@emotion/styled';
import Image from 'next/image';

interface PropsType {
  profileImageUrl: string;
  name: string;
  contents: string;
}

const Comment = ({ profileImageUrl, name, contents }: PropsType) => {
  return (
    <_Wrapper>
      <_ProfileImage src={profileImageUrl} alt={name} />
      <_Name>{name}</_Name>
      <_Contents>{contents}</_Contents>
    </_Wrapper>
  );
};

export default Comment;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  margin-right: 25px;
`;

const _Name = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body5};
  margin-right: 15px;
`;

const _Contents = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body6};
`;
