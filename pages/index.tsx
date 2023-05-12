import Footer from '@/components/common/footer';
import Head from 'next/head';
import Header from '@/components/common/header';
import ImageContainer from '@/components/main/ImageContainer';
import IntroduceContainer from '@/components/main/Introduce';
import { Main01, Main02 } from '@/assets';
import styled from '@emotion/styled';
import { useModal } from '@/hooks/useModal';
import LoginModal from '@/components/common/modal/Login';

const Home = () => {
  const { modal } = useModal('Login');
  return (
    <_Wrapper>
      {modal.isOpen && <LoginModal />}
      <Head>
        <title>EH</title>
      </Head>
      <Header />
      <ImageContainer />
      <IntroduceContainer
        imageUrl={Main01}
        text={['EH에서 운동과 식단을 공유할 수 있어요.', '소통을 통해 원하는 정보를 얻어보세요 !']}
        reverse={false}
      />
      <IntroduceContainer
        imageUrl={Main02}
        text={['그룹을 참가하여 같이 운동할 사람을 찾을 수 있어요! ', '그룹과 함께 배우며 운동합시다 !']}
        reverse={true}
      />
      <Footer />
    </_Wrapper>
  );
};

export default Home;

const _Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
