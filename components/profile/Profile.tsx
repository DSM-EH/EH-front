import styled from '@emotion/styled';
import { ProfileType } from '@/types/profile';
import Image from 'next/image';
import Button from '../common/button';
import { deleteCookie } from '@/utils/cookie/cookie';

const Profile = ({ name, imageUrl, introduce, myProfile }: ProfileType) => {
  const onClick = () => {};

  const logOutOnClick = () => {
    deleteCookie('access_token');
    deleteCookie('refresh_token');
    localStorage.removeItem('email');
    window.location.href = '/';
  };

  return (
    <_Wrapper>
      <_Image src={imageUrl} alt="name" />
      <_Name>{name}</_Name>
      <_Introduce>{introduce}</_Introduce>
      {myProfile && (
        <>
          <Button onClick={onClick} buttonColor="main01" fontColor="main01">
            수정
          </Button>
          <Button onClick={logOutOnClick} buttonColor="main01" fontColor="main01" style={{ marginTop: '20px' }}>
            로그아웃
          </Button>
        </>
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
