import Head from 'next/head';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { NextRouter, useRouter } from 'next/router';
import Header from '@/components/common/header';
import Button from '@/components/common/button';
import GroupMemberList from '@/components/profile/GroupMemberList';
import PromotionList from '@/components/promotion/PromotionList';
import { copyClipBoardOnClick } from '@/utils/functions/copyClipBoard';
import { Option } from '@/assets';
import skeleton from '@/lib/styles/skeleton';
import { getGroupFindOne } from '@/apis/getGroupFindOne';
import { customToast } from '@/utils/toast/toast';
import { GetGroupApiType } from '@/types/group';
import { useModal } from '@/hooks/useModal';
import SupportModal from '@/components/common/modal/Support';
import { getMembers } from '@/apis/getMembers';
import Apply from '@/components/member/Apply';
import ApplyModal from '@/components/common/modal/ApplyModal';
import { redirectionAtom } from '@/utils/atoms/atom';
import { useRecoilValue } from 'recoil';

const GroupIdPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [state, setState] = useState<boolean>(false);
  const router: NextRouter = useRouter();
  const { groupName } = router.query as { groupName: string };
  const { modal, openModal } = useModal('Support');
  const { modal: isSupportModalOpen } = useModal('Apply');
  const [isMember, setIsMember] = useState<boolean>(false);
  const redirect = useRecoilValue(redirectionAtom);
  const [group, setGroup] = useState<GetGroupApiType>({
    id: 0,
    title: '',
    profile_image: '',
    background_image: '',
    poster_image: '',
    description: '',
    max_people: 0,
    set_time: new Date(),
    owner: {
      id: 0,
      email: '',
      nickname: '',
      profile_image_url: '',
      description: '',
      password: '',
    },
  });

  const onShowMemberClick = () => {
    router.push('/group/[groupName]/member', `/group/${groupName}/member`);
  };

  const writeOnClick = () => {
    router.push('/group/[groupName]/write', `/group/${groupName}/write`);
  };

  useEffect(() => {
    const id: string | null = localStorage.getItem('groupId');
    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (!id) {
      customToast('잘못된 접근입니다', 'error');
      return;
    }

    getGroupFindOne(id)
      .then(res => {
        const { data } = res;
        setGroup(data);
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
        customToast('개발자 에러', 'error');
      });

    getMembers(id)
      .then(res => {
        const { data } = res;
        const email: string | null = localStorage.getItem('email');
        const result: boolean = data.some((element: any) => element.email === email);

        if (result) {
          setIsMember(true);
        }
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('개발자 에러', 'error');
      });

    return () => clearTimeout(timer);
  }, [redirect]);

  return (
    <div>
      {modal.isOpen && <SupportModal />}
      {isSupportModalOpen.isOpen && <ApplyModal setState={setState} />}
      <Head>
        <title>{group.title}</title>
      </Head>
      <Header />
      <_ImageWrapper>
        {isLoading ? (
          <_SkeletonBackgroundImage width={99.9} height={450} />
        ) : (
          <>
            <_Image src={group.background_image} alt="background" />
            <_Filter />
          </>
        )}
      </_ImageWrapper>
      <_UpperWrapper>
        <_LeftWrapper>
          {isLoading ? (
            <_SkeletonBackgroundImage width={100} height={100} style={{ marginRight: '20px' }} />
          ) : (
            <_GroupLogoImage src={group.profile_image} alt="GroupName" />
          )}
          <_TextWrapper>
            {isLoading ? (
              <>
                <_SkeletonText />
                <_SkeletonText />
              </>
            ) : (
              <>
                <_Title>{group.title}</_Title>
                <_IntroduceText>{group.description}</_IntroduceText>
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
          ) : isMember ? (
            <>
              <_Button onClick={writeOnClick} buttonColor="main01" fontColor="main01">
                글쓰기
              </_Button>
              <_Button onClick={copyClipBoardOnClick} buttonColor="main01" fontColor="main01">
                링크복사
              </_Button>
            </>
          ) : (
            <>
              <_Button onClick={openModal} buttonColor="main01" fontColor="main01">
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
        <div>
          <GroupMemberList state={state} onClick={onShowMemberClick} isLoading={isLoading} title="그룹 멤버 💪🏻" />
          {isMember && <Apply state={state} isLoading={isLoading} />}
        </div>
        <PromotionList isLoading={isLoading} />
      </_MainWrapper>
    </div>
  );
};

export default GroupIdPage;

const _Image = styled.img`
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

const _GroupLogoImage = styled.img`
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
