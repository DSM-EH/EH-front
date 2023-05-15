import styled from '@emotion/styled';
import { LoginType } from '@/types/login';
import { useState } from 'react';
import { Logo } from '@/assets';
import Image from 'next/image';
import TextField from '../textfield';
import Button from '../button';

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
      <Button buttonColor="main01" fontColor="main01">
        로그인
      </Button>
    </>
  );
};

export default SelfLogin;
