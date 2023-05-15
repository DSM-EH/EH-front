import styled from '@emotion/styled';
import { SignUpType } from '@/types/signup';
import { Dispatch, SetStateAction } from 'react';
import { Logo } from '@/assets';
import Image from 'next/image';
import FindImage from '../find/FindImage';
import Button from '../button';
import { useModal } from '@/hooks/useModal';

interface PropsType {
  setSignUpInformation: Dispatch<SetStateAction<SignUpType>>;
}

const ProfileInit = ({ setSignUpInformation }: PropsType) => {
    const { closeModal } = useModal('Login');

  return (
    <>
      <Image src={Logo} alt="Logo" />
      <_Wrapper>
        <_Title>프로필 사진</_Title>
        <FindImage height={300} name="profileImageUrl"/>
        <Button onClick={closeModal} buttonColor='main01' fontColor='main01'>회원가입</Button>
      </_Wrapper>
    </>
  );
};

export default ProfileInit;

const _Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 80px;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
`;

