import styled, { StyledComponent } from '@emotion/styled';
import { Developers, DeveloperType } from '@/utils/constants/developers';
import { Logo, GithubLogo } from '@/assets';
import Image from 'next/image';

const Footer = () => {
  return (
    <_Wrapper>
      <Image src={Logo} alt="Logo" width={100} />
      <_InformationWrapper>
        <_LeftWrapper>
          <_Text>소프트웨어공학실무 - EH</_Text>
          <_Text>개인정보 처리방침 ㅣ 이용약관</_Text>
          <_OriginText>ⓒ Daedeok Software Meister High School</_OriginText>
        </_LeftWrapper>
        <_RightWrapper>
          <_DeveloperWrapper>
            <_Text>Developers</_Text>
            {Developers.map((element: DeveloperType) => (
              <_DeveloperLink key={element.id} href={`https://github.com/${element.github}`}>
                {element.name}
              </_DeveloperLink>
            ))}
          </_DeveloperWrapper>
          <_GithubWrapper href="https://github.com/DSM-EH">
            <_OrganizationText>DSM-EH</_OrganizationText>
            <Image src={GithubLogo} alt="GithubLogo" width={30} />
          </_GithubWrapper>
        </_RightWrapper>
      </_InformationWrapper>
    </_Wrapper>
  );
};

export default Footer;

const _Wrapper = styled.footer`
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 240px;
  background: ${({ theme }) => theme.color.gray100};
  color: ${({ theme }) => theme.color.black};
`;

const _InformationWrapper = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: space-between;
`;

const _LeftWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const _RightWrapper = styled(_LeftWrapper)`
  width: 30%;
  align-items: flex-end;
`;

const _Text = styled.span`
  ${({ theme }) => theme.font.body5};
`;

const _OrganizationText = styled(_Text)`
  :hover {
    text-decoration: underline;
  }
`;

const _OriginText = styled.span`
  ${({ theme }) => theme.font.body7};
`;

const _DeveloperWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const _DeveloperLink = styled.a`
  color: ${({ theme }) => theme.color.black};
  text-decoration: none;
`;

const _GithubWrapper = styled.a`
  width: 30%;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  justify-content: space-around;
`;
