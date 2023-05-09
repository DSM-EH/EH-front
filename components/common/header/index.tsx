import styled from '@emotion/styled';
import { Logo } from '@/assets';
import Image from 'next/image';
import Button from '../button';
import { useState } from 'react';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { modalState } from '@/utils/atoms/atom';

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const onClick = () => {};

  return (
    <_Wrapper>
      <_LeftWrapper href="/">
        <_LogoImage src={Logo} alt="Logo" />
      </_LeftWrapper>
      <_NavWrapper>
        <_NavText href="/group">운동 그룹</_NavText>
        {isLogin ? (
          <_ProfileWrapper href="/mypage">
            <_ProfileImage src={Logo} alt="Profile" />
            <_Name>김경호</_Name>
          </_ProfileWrapper>
        ) : (
          <Button onClick={onClick} buttonColor="main01" fontColor="main01">
            로그인
          </Button>
        )}
      </_NavWrapper>
    </_Wrapper>
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

const _LeftWrapper = styled(Link)`
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

const _ProfileImage = styled(Image)`
  width: 50px;
  height: 50px;
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
