import ModalItem from './ModalItem';
import ModalBackground from './Background';
import { MouseEvent, useState } from 'react';
import MainLogin from './MainLogin';
import SelfLogin from './SelfLogin';
import SignUp from './SignUp';

const LoginModal = () => {
  const [modal, setModal] = useState<string>('MainModal');

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalBackground modalName="Login">
      <ModalItem onClick={onClick} height={modal === 'SignUp' ? 800 : 500}>
        {modal === 'SelfModal' ? <SelfLogin /> : modal === 'MainModal' ? <MainLogin setModal={setModal} /> : <SignUp />}
      </ModalItem>
    </ModalBackground>
  );
};

export default LoginModal;
