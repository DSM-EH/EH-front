import { SignUpType } from '@/types/signup';
import { ChangeEvent, useState } from 'react';
import { Logo } from '@/assets';
import Image from 'next/image';
import TextField from '../textfield';
import Button from '../button';
import ProfileInit from './ProfileInit';
import { customToast } from '@/utils/toast/toast';

const SignUp = () => {
  const [signUpInformation, setSignUpInformation] = useState<SignUpType>({
    email: '',
    password: '',
    name: '',
    passwordConfirmation: '',
    profileImageUrl: '',
  });
  const [profileModal, setProfileModal] = useState<boolean>(false);

  const onClick = () => {
    if (signUpInformation.password !== signUpInformation.passwordConfirmation) {
      customToast('비밀번호를 한번 더 확인해주세요.', 'error');
      return;
    }
    setProfileModal(true);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInformation({ ...signUpInformation, [name]: value });
  };

  return (
    <>
      {profileModal ? (
        <ProfileInit signUpInformation={signUpInformation} setSignUpInformation={setSignUpInformation} />
      ) : (
        <>
          <Image src={Logo} alt="Logo" />
          <TextField
            width={400}
            placeholder="이름을 입력해주세요."
            name="name"
            onChange={onChange}
            value={signUpInformation.name}
            text="이름"
          />
          <TextField
            width={400}
            placeholder="이메일을 입력해주세요."
            name="email"
            onChange={onChange}
            value={signUpInformation.email}
            text="이메일"
          />
          <TextField
            width={400}
            placeholder="비밀번호를 입력해주세요."
            name="password"
            onChange={onChange}
            value={signUpInformation.password}
            text="비밀번호"
            type="password"
          />
          <TextField
            width={400}
            placeholder="비밀번호를 다시 입력해주세요."
            name="passwordConfirmation"
            onChange={onChange}
            value={signUpInformation.passwordConfirmation}
            text="비밀번호 확인"
            type="password"
          />
          <Button onClick={onClick} buttonColor="main01" fontColor="main01">
            다음
          </Button>
        </>
      )}
    </>
  );
};

export default SignUp;
