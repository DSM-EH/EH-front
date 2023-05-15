import styled from '@emotion/styled';
import { Logo, GoogleLogo } from '@/assets';
import Image from 'next/image';
import LoginButton from '@/components/login/Button';

interface PropsType {
  setModal: (modal: boolean) => void;
}

const MainLogin = ({ setModal }: PropsType) => {
  const onClick = () => {
    setModal(true);
  };

  return (
    <_Wrapper>
      <Image src={Logo} alt="EH" width={75} />
      <_ButtonWrapper>
        <LoginButton text="Google로 계속하기" imageUrl={GoogleLogo} />
        <LoginButton onClick={onClick} text="다른 이메일로 로그인하기" />
      </_ButtonWrapper>
      <_Text>
        아직 회원이 아니신가요? <_SignUpText>회원가입</_SignUpText>
      </_Text>
    </_Wrapper>
  );
};

export default MainLogin;

const _Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const _ButtonWrapper = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _Text = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body5};
`;

const _SignUpText = styled(_Text)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.main01};
  :hover {
    text-decoration: underline;
  }
`;
