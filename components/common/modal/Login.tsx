import ModalItem from './ModalItem';
import ModalBackground from './Background';
import { MouseEvent, useState } from 'react';
import MainLogin from './MainLogin';
import SelfLogin from './SelfLogin';

const LoginModal = () => {
  const [modal, setModal] = useState<boolean>(false);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ModalBackground modalName="Login">
      <ModalItem onClick={onClick} height={500}>
        {modal ? <SelfLogin /> : <MainLogin setModal={setModal} />}
      </ModalItem>
    </ModalBackground>
  );
};

export default LoginModal;
