import styled from '@emotion/styled';
import { Logo } from '@/assets';
import Image, { StaticImageData } from 'next/image';
import Button from '../button';
import { useState, Fragment, useEffect } from 'react';
import Link from 'next/link';
import { useModal } from '@/hooks/useModal';
import LoginModal from '../modal/Login';
import { getCookie } from '@/utils/cookie/cookie';
import { getProfile } from '@/apis/getProfile';

interface ProfileType {
  name: string;
  profileImageUrl: string;
}

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { modal, openModal } = useModal('Login');
  const [profile, setProfile] = useState<ProfileType>({
    name: '',
    profileImageUrl: '',
  });

  useEffect(() => {
    const acccessToken: string = getCookie('accessToken');

    getProfile()
      .then(res => {
        const { data } = res;
        console.log(data)
        setIsLogin(true);
        setProfile({
          name: data.nickname,
          profileImageUrl: data.profile_image_url,
        });
      })
      .catch((error: unknown) => {
        console.error(error);
      });
  }, []);

  return (
    <Fragment>
      {modal.isOpen && <LoginModal />}
      <_Wrapper>
        <_LeftWrapper>
          <_LogoImage onClick={() => (window.location.href = '/')} src={Logo} alt="Logo" />
        </_LeftWrapper>
        <_NavWrapper>
          <_NavText href="/group">운동 그룹</_NavText>
          {isLogin ? (
            <_ProfileWrapper href="/mypage">
              <_ProfileImage width={50} height={50} src={profile.profileImageUrl} alt="Profile" />
              <_Name>{profile.name}</_Name>
            </_ProfileWrapper>
          ) : (
            <Button onClick={openModal} buttonColor="main01" fontColor="main01">
              로그인
            </Button>
          )}
        </_NavWrapper>
      </_Wrapper>
    </Fragment>
  );
};

export default Header;

const _Wrapper = styled.header`
  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const _LogoImage = styled(Image)`
  cursor: pointer;
`;

const _LeftWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: default;
`;

const _NavWrapper = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const _NavText = styled(Link)`
  ${({ theme }) => theme.font.body3};
  margin-right: 50px;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const _ProfileImage = styled.img`
  border-radius: 16px;
`;

const _ProfileWrapper = styled(Link)`
  display: flex;
  align-items: center;
`;

const _Name = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body4};
  margin-left: 30px;
`;
