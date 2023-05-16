import ModalItem from './ModalItem';
import ModalBackground from './Background';
import { MouseEvent, useState } from 'react';
import MainLogin from './MainLogin';
import SelfLogin from './SelfLogin';
import SignUp from './SignUp';
import { useModal } from '@/hooks/useModal';

const LoginModal = () => {
  const [modalState, setModalState] = useState<string>('MainModal');
  const { modal, closeModal } = useModal('Login');
  const [visible, setVisible] = useState<boolean>(modal.isOpen);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const backgroundOnClick = () => {
    setVisible(false);
    setTimeout(() => {
      closeModal();
    }, 200);
  };

  return (
    <ModalBackground modalName="Login" onClick={backgroundOnClick}>
      <ModalItem modal={visible} onClick={onClick} height={modalState === 'SignUp' ? 800 : 500}>
        {modalState === 'SelfModal' ? (
          <SelfLogin />
        ) : modalState === 'MainModal' ? (
          <MainLogin setModalState={setModalState} />
        ) : (
          <SignUp />
        )}
      </ModalItem>
    </ModalBackground>
  );
};

export default LoginModal;
