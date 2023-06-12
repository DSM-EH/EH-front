import Header from '@/components/common/header';
import Wrapper from '@/components/common/wrapper';
import Profile from '@/components/profile/Profile';
import styled from '@emotion/styled';
import ProfileGroupList from '@/components/profile/GroupList';
import { mypage } from '@/utils/constants/profile';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getUserProfile } from '@/apis/getUserProfile';
import { customToast } from '@/utils/toast/toast';
import { ProfileApiType } from '@/types/profile';
import { getMyGroup } from '@/apis/getMyGroup';
import { useModal } from '@/hooks/useModal';

const Mypage = () => {
  const [user, setUser] = useState<ProfileApiType>({
    id: 0,
    email: '',
    password: '',
    nickname: '',
    description: '',
    profile_image_url: '',
  });
  const { modal } = useModal('Modify');

  useEffect(() => {
    const email: string | null = localStorage.getItem('email');
    if (!email) {
      customToast('잘못된 접근입니다', 'error');
      return;
    }

    getUserProfile(email)
      .then(res => {
        console.log('유저가 있네');
        setUser(res.data);
      })
      .catch((err: unknown) => {
        customToast('잘못된 접근입니다', 'error');
        console.error(err);
      });

    getMyGroup()
      .then(res => {
        console.log(res);
      })
      .catch((err: unknown) => {
        customToast('잘못된 접근입니다', 'error');
        console.error(err);
      });
  }, []);
  return (
    <Wrapper>
      <Head>
        <title>EH 마이페이지</title>
      </Head>
      <Header />
      <_Wrapper>
        <Profile {...user} />
        <ProfileGroupList />
      </_Wrapper>
    </Wrapper>
  );
};

export default Mypage;

const _Wrapper = styled.section`
  width: 100%;
  display: flex;
`;
