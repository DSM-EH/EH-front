import styled from '@emotion/styled';
import { ProfileType } from '@/types/profile';
import Image from 'next/image';
import Button from '../common/button';

const Profile = (props: ProfileType) => {
  const { name, imageUrl, introduce, myprofile } = props;

  return (
    <_Wrapper>
      <_Image src={imageUrl} alt="name" />
      <_Name>{name}</_Name>
      <_Introduce>{introduce}</_Introduce>
      {myprofile && (
        <Button buttonColor="main01" fontColor="main01">
          수정
        </Button>
      )}
    </_Wrapper>
  );
};

export default Profile;

const _Wrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 135px;
`;

const _Image = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 15px;
`;

const _Name = styled.p`
  ${({ theme }) => theme.font.title2};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 15px;
`;

const _Introduce = styled.p`
  width: 220px;
  ${({ theme }) => theme.font.body2};
  color: ${({ theme }) => theme.color.gray900};
  margin-bottom: 15px;
  white-space: normal;
`;
