import Header from '@/components/common/header';
import Wrapper from '@/components/common/wrapper';
import Head from 'next/head';
import router from 'next/router';
import GroupMemberList from '@/components/group/GroupMemberList';

const MemberPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>그룹멤버들</title>
      </Head>
      <Header />
      <GroupMemberList title={'group'} />
    </Wrapper>
  );
};

export default MemberPage;
