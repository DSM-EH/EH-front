import { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/common/header';
import styled from '@emotion/styled';
import CreateGroup from '@/components/group/CreateGroup';

const CreateGroupPage: NextPage = () => {
  return (
    <_Wrapper>
      <Head>
        <title>그룹 생성하기</title>
      </Head>
      <Header />
      <CreateGroup />
    </_Wrapper>
  );
};

export default CreateGroupPage;

const _Wrapper = styled.div`
  width: 100vw;
`;
