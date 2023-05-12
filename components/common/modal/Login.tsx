import ModalItem from './ModalItem';
import ModalBackground from './Background';
import { MouseEvent } from 'react';
import MainLogin from './MainLogin';

const LoginModal = () => {
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalBackground modalName="Login">
      <ModalItem onClick={onClick} height={500}>
        <MainLogin />
      </ModalItem>
    </ModalBackground>
  );
};

export default LoginModal;
