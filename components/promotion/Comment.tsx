import skeleton from '@/lib/styles/skeleton';
import styled from '@emotion/styled';

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
  isLoading: boolean;
}

const Comment = ({ content, writer, isLoading }: PropsType) => {
  return (
    <_Wrapper>
      {isLoading ? (
        <>
          <_SkeletonImage />
          <_SkeletonText width={50} />
          <_SkeletonText />
        </>
      ) : (
        <>
          <_ProfileImage src={writer.profile_image_url} alt={writer.nickname} />
          <_Name>{writer.nickname}</_Name>
          <_Contents>{content}</_Contents>
        </>
      )}
    </_Wrapper>
  );
};

export default Comment;

const _Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const _SkeletonImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
  margin-right: 20px;
`;

const _SkeletonText = styled.div<{ width?: number }>`
  width: ${({ width = 100 }) => (width ? `${width}px` : `${width}%`)};
  height: 30px;
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
  margin-right: 20px;
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
