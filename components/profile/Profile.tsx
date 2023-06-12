import styled from '@emotion/styled';
import { ProfileApiType } from '@/types/profile';
import Button from '../common/button';
import { deleteCookie } from '@/utils/cookie/cookie';
import { useEffect, useState } from 'react';
import { useModal } from '@/hooks/useModal';

const Profile = ({ id, email, password, nickname, description, profile_image_url }: ProfileApiType) => {
  const [myProfile, setMyProfile] = useState<boolean>(false);
  const { openModal } = useModal('Modify');

  const logOutOnClick = () => {
    deleteCookie('access_token');
    deleteCookie('refresh_token');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    window.location.href = '/';
  };

  useEffect(() => {
    const myEmail: string | null = localStorage.getItem('email');

    if (email === myEmail) {
      setMyProfile(true);
    }
  }, []);

  return (
    <_Wrapper>
      <_Image src={profile_image_url} alt="name" />
      <_Name>{nickname}</_Name>
      <_Introduce>{description}</_Introduce>
      {!myProfile && (
        <>
          <Button onClick={openModal} buttonColor="main01" fontColor="main01">
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

const _Image = styled.img`
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
