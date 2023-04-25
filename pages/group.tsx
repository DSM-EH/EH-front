import Header from '@/components/common/header';
import styled from '@emotion/styled';
import Head from 'next/head';
import GroupPart from '@/components/group/GroupPart';

const GroupPage = () => {
  return (
    <_Wrapper>
      <Head>
        <title>EH 운동 그룹</title>
      </Head>
      <Header />
      <GroupPart />
    </_Wrapper>
  );
};

export default GroupPage;

const _Wrapper = styled.div`
  width: 100vw;
`;
