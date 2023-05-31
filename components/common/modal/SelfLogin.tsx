import { LoginType } from '@/types/login';
import { useState } from 'react';
import { Logo } from '@/assets';
import Image from 'next/image';
import TextField from '../textfield';
import Button from '../button';
import { postSignIn } from '@/apis/signIn';
import { customToast } from '@/utils/toast/toast';
import { setCookie } from '@/utils/cookie/cookie';

const SelfLogin = () => {
  const [loginInformation, setLoginInformation] = useState<LoginType>({
    email: '',
    password: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setLoginInformation({
      ...loginInformation,
      [name]: value,
    });
  };

  const onClick = () => {
    postSignIn(loginInformation)
      .then(res => {
        setCookie('access_token', res.data.access_token);
        setCookie('refresh_token', res.data.refresh_token);
        window.localStorage.setItem('email', loginInformation.email);
        window.location.reload();
      })
      .catch((error: unknown) => {
        console.error(error);
        window.localStorage.setItem('email', loginInformation.email);
        window.location.reload();
      });
  };

  return (
    <>
      <Image src={Logo} alt="Logo" />
      <TextField
        width={400}
        placeholder="이메일을 입력해주세요."
        value={loginInformation.email}
        onChange={onChange}
        name="email"
        text="이메일"
      />
      <TextField
        width={400}
        placeholder="비밀번호를 입력해주세요."
        value={loginInformation.password}
        onChange={onChange}
        name="password"
        text="비밀번호"
        type="password"
      />
      <Button onClick={onClick} buttonColor="main01" fontColor="main01">
        로그인
      </Button>
    </>
  );
};

export default SelfLogin;
