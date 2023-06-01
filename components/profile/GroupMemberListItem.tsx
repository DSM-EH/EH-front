import skeleton from '@/lib/styles/skeleton';
import styled from '@emotion/styled';
import Image from 'next/image';

interface PropsType {
  id: number;
  email: string;
  password: string;
  nickname: string;
  description: string;
  profile_image_url: string;
  isLoading: boolean;
}

const GroupMemberListItem = ({ profile_image_url, nickname, isLoading }: PropsType) => {
  return (
    <_Wrapper>
      {isLoading ? (
        <>
          <_Skeleton width="50px" height="50px" />
          <_Skeleton width="140px" height="30px" style={{ marginLeft: '30px' }} />
        </>
      ) : (
        <>
          <_ProfileImage src={profile_image_url} alt={nickname} />
          <_Name>{nickname}</_Name>
        </>
      )}
    </_Wrapper>
  );
};

export default GroupMemberListItem;

const _Wrapper = styled.div`
  padding: 6px 12px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const _ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
  margin-right: 30px;
  border-radius: 5px;
`;

const _Name = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body3};
`;

const _Skeleton = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
`;
