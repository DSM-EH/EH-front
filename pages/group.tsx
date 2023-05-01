import Header from '@/components/common/header';
import Head from 'next/head';
import GroupPart from '@/components/group/GroupPart';
import Wrapper from '@/components/common/wrapper';

const GroupPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>EH 운동 그룹</title>
      </Head>
      <Header />
      <GroupPart />
    </Wrapper>
  );
};

export default GroupPage;
