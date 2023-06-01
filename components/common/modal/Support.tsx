import styled from '@emotion/styled';
import ModalBackground from './Background';
import { useModal } from '@/hooks/useModal';
import ModalItem from './ModalItem';
import { ChangeEvent, useState, MouseEvent } from 'react';
import TextField from '../textfield';
import Button from '../button';
import { customToast } from '@/utils/toast/toast';
import { groupRequest } from '@/apis/groupRequest';

const SupportModal = () => {
  const { modal, closeModal } = useModal('Support');
  const [supportReason, setSupportReason] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(modal.isOpen);

  const stopPropagationOnClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onClick = () => {
    const email = localStorage.getItem('email');
    const groupId = localStorage.getItem('groupId');

    if (!email || !groupId) {
      customToast('로그인이 필요합니다.', 'error');
      return;
    }

    if (!supportReason) {
      customToast('지원동기를 입력해주세요.', 'error');
      return;
    }

    groupRequest({ email, group_id: groupId, intro: supportReason })
      .then(res => {
        console.log(res);
        customToast('지원이 완료되었습니다.', 'success');
        closeModal();
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('개발자 에러', 'error');
      });
  };

  const closeModalOnClick = () => {
    setVisible(false);
    setTimeout(() => {
      closeModal();
    }, 200);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSupportReason(e.target.value);
  };

  return (
    <ModalBackground modalName="Support" onClick={closeModalOnClick}>
      <ModalItem modal={visible} onClick={stopPropagationOnClick} height={500}>
        <_Wrapper>
          <_Title>그룹에 지원한 이유</_Title>
          <TextField value={supportReason} onChange={onChange} text="지원동기" placeholder="지원동기를 입력하세요." />
          <Button buttonColor="main01" fontColor="main01" onClick={onClick}>
            지원하기
          </Button>
        </_Wrapper>
      </ModalItem>
    </ModalBackground>
  );
};

export default SupportModal;

const _Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 60px;
  
`;

const _Title = styled.strong`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
`;
