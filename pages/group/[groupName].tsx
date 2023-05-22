import styled from '@emotion/styled';
import { NextRouter, useRouter } from 'next/router';
import Header from '@/components/common/header';
import Head from 'next/head';
import { Introduce, Option } from '@/assets';
import Image from 'next/image';
import Button from '@/components/common/button';
import { copyClipBoardOnClick } from '@/utils/functions/copyClipBoard';
import { useState, useEffect, MouseEvent } from 'react';
import { css } from '@emotion/react';
import skeleton from '@/lib/styles/skeleton';
import GroupMemberList from '@/components/profile/GroupMemberList';
import PromotionList from '@/components/promotion/PromotionList';

const GroupIdPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router: NextRouter = useRouter();
  const { groupName } = router.query;

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>{groupName}</title>
      </Head>
      <Header />
      <_ImageWrapper>
        {isLoading ? (
          <_SkeletonBackgroundImage width={99.9} height={450} />
        ) : (
          <>
            <_Image src={Introduce} alt="background" />
            <_Filter />
          </>
        )}
      </_ImageWrapper>
      <_UpperWrapper>
        <_LeftWrapper>
          {isLoading ? (
            <_SkeletonBackgroundImage width={100} height={100} style={{ marginRight: '20px' }} />
          ) : (
            <_GroupLogoImage src={Introduce} alt="GroupName" />
          )}
          <_TextWrapper>
            {isLoading ? (
              <>
                <_SkeletonText />
                <_SkeletonText />
              </>
            ) : (
              <>
                <_Title>타이틀</_Title>
                <_IntroduceText>ㅇㄹㅇㄹ알어ㅏㄹ</_IntroduceText>
              </>
            )}
          </_TextWrapper>
        </_LeftWrapper>
        <_ButtonWrapper>
          {isLoading ? (
            <>
              <_SkeletonButton />
              <_SkeletonButton />
            </>
          ) : (
            <>
              <_Button buttonColor="main01" fontColor="main01">
                지원하기
              </_Button>
              <_Button onClick={copyClipBoardOnClick} buttonColor="main01" fontColor="main01">
                링크복사
              </_Button>
            </>
          )}
          <Image src={Option} alt="option" />
        </_ButtonWrapper>
      </_UpperWrapper>
      <_MainWrapper>
        <GroupMemberList isLoading={isLoading} title="그룹 멤버 💪🏻" />
        <PromotionList />
      </_MainWrapper>
    </div>
  );
};

export default GroupIdPage;

const _Image = styled(Image)`
  width: 100vw;
  height: 450px;
  z-index: -1;
  position: absolute;
`;

const _ImageWrapper = styled.div`
  width: 100vw;
  height: 450px;
`;

const _Filter = styled.div`
  width: 100%;
  height: 450px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const _UpperWrapper = styled.div`
  padding: 50px 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _GroupLogoImage = styled(Image)`
  width: 100px;
  height: 100px;
  margin-right: 20px;
  border-radius: 10px;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.black};
`;

const _IntroduceText = styled.p`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.black};
`;

const _TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _LeftWrapper = styled.div`
  display: flex;
`;

const _ButtonWrapper = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
`;

const _SkeletonBackgroundImage = styled.div<{ width: number; height: number }>`
  ${({ width, height }) => css`
    width: ${width < 100 ? `${width}%` : `${width}px`};
    height: ${height}px;
  `}
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
`;

const _SkeletonButton = styled.div`
  width: 160px;
  height: 39px;
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
  margin-right: 30px;
`;

const _SkeletonText = styled.div`
  width: 500px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
`;

const _Button = styled(Button)`
  margin-right: 30px;
`;

const _MainWrapper = styled.div`
  width: 100vw;
  display: flex;
  padding: 95px 250px;
`;
