import Header from '@/components/common/header';
import Wrapper from '@/components/common/wrapper';
import Profile from '@/components/profile/Profile';
import styled from '@emotion/styled';
import ProfileGroupList from '@/components/profile/GroupList';
import { mypage } from '@/utils/constants/profile';

const Mypage = () => {
  return (
    <Wrapper>
      <Header />
      <_Wrapper>
        <Profile {...mypage} />
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
