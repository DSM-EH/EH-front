import styled from '@emotion/styled';
import ModalBackground from './Background';
import ModalItem from './ModalItem';
import { useModal } from '@/hooks/useModal';
import { useEffect, useState, MouseEvent } from 'react';
import { getApplyMembers } from '@/apis/getApplyMembers';
import Button from '../button';
import { deleteRequest } from '@/apis/deleteRequest';
import { customToast } from '@/utils/toast/toast';
import { acceptRequest } from '@/apis/acceptRequest';
import { redirectionAtom } from '@/utils/atoms/atom';
import { useRecoilState } from 'recoil';

interface MemberType {
  description: string;
  email: string;
  id: number;
  nickname: string;
  password?: string;
  profile_image_url: string;
}

const ApplyModal = ({ setState }: { setState: (state: boolean) => void }) => {
  const [visible, setVisible] = useState<boolean>(true);
  const [intro, setIntro] = useState<string>('');
  const [member, setMember] = useState<MemberType>({
    description: '',
    email: '',
    id: 0,
    nickname: '',
    password: '',
    profile_image_url: '',
  });
  const { closeModal } = useModal('Apply');
  const [redirect, setRedirect] = useRecoilState<boolean>(redirectionAtom);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const backgroundOnClick = () => {
    setVisible(false);
    setTimeout(() => {
      closeModal();
    }, 200);
  };

  const deleteOnClick = () => {
    const groupId: string | null = localStorage.getItem('groupId');

    if (!groupId) return;

    deleteRequest(member.email, Number(groupId))
      .then(res => {
        console.log(res);
        closeModal();
        customToast('요청을 거절했습니다.', 'success');
        setRedirect(true);
        setState(true);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  };

  const acceptOnClick = () => {
    const groupId: string | null = localStorage.getItem('groupId');

    if (!groupId) return;

    acceptRequest(member.email, Number(groupId))
      .then(res => {
        console.log(res);
        closeModal();
        customToast('요청을 수락했습니다.', 'success');
        setRedirect(true);
        setState(true);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  };

  useEffect(() => {
    const groupId = localStorage.getItem('groupId');

    if (!groupId) return;

    getApplyMembers(groupId)
      .then(({ data }) => {
        data.forEach((ele: any) => {
          const userId = Number(localStorage.getItem('userId'));
          if (ele.user.id === userId) {
            setMember(ele.user);
            console.log(ele.user);
            setIntro(ele.intro);
            return;
          }
        });
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  return (
    <ModalBackground onClick={backgroundOnClick} modalName={'Apply'}>
      <ModalItem onClick={onClick} modal={visible} height={500}>
        <_Wrapper>
          <_Title>지원 멤버</_Title>
          <_InnerWrapper>
            <_Image src={member.profile_image_url} />
            <_InToWrapper>
              <_InformationWrapper>
                <_NameTitle>이름</_NameTitle>
                <_Name>{member.nickname}</_Name>
              </_InformationWrapper>
              <_InformationWrapper>
                <_NameTitle>가입 사유</_NameTitle>
                <_Name>{intro}</_Name>
              </_InformationWrapper>
            </_InToWrapper>
          </_InnerWrapper>
          <_ButtonWrapper>
            <Button onClick={deleteOnClick} buttonColor="error" fontColor="error" style={{ marginRight: '20px' }}>
              거절
            </Button>
            <Button onClick={acceptOnClick} buttonColor="main01" fontColor="main01">
              수락
            </Button>
          </_ButtonWrapper>
        </_Wrapper>
      </ModalItem>
    </ModalBackground>
  );
};

export default ApplyModal;

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 50px;
`;

const _Title = styled.strong`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 30px;
`;

const _InnerWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: space-between;
`;

const _Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
`;

const _InformationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const _NameTitle = styled.strong`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.black};
  margin-right: 30px;
`;

const _Name = styled.span`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.black};
`;

const _InToWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 60px;
`;
