import Header from '@/components/common/header';
import Wrapper from '@/components/common/wrapper';
import Head from 'next/head';
import GroupMemberList from '@/components/group/GroupMemberList';
import { NextRouter, useRouter } from 'next/router';

const MemberPage = () => {
  const router: NextRouter = useRouter();
  const { groupName } = router.query as { groupName: string };

  return (
    <Wrapper>
      <Head>
        <title>그룹멤버들</title>
      </Head>
      <Header />
      <GroupMemberList title={groupName} />
    </Wrapper>
  );
};

export default MemberPage;
