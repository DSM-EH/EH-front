import styled from '@emotion/styled';
import Image from 'next/image';

interface PropsType {
  content: string;
  id: number;
  writer: {
    description: string;
    email: string;
    id: number;
    nickname: string;
    password: string;
    profile_image_url: string;
  };
}

const Comment = ({ content, writer }: PropsType) => {
  return (
    <_Wrapper>
      <_ProfileImage src={writer.profile_image_url} alt={writer.nickname} />
      <_Name>{writer.nickname}</_Name>
      <_Contents>{content}</_Contents>
    </_Wrapper>
  );
};

export default Comment;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _ProfileImage = styled.img`
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
