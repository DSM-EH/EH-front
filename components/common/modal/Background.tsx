import styled from '@emotion/styled';
import { ReactNode, useEffect } from 'react';
import { useModal } from '@/hooks/useModal';

interface PropsType {
  children: ReactNode;
  modalName: string;
}

const ModalBackground = ({ children, modalName }: PropsType) => {
  const { modal, closeModal } = useModal(modalName);

  useEffect(() => {
    document.body.style.overflow = modal.isOpen ? 'hidden' : 'unset';
  }, [modal]);

  return <_Wrapper onClick={closeModal}>{children}</_Wrapper>;
};

export default ModalBackground;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
  position: fixed;
  overflow-y: hidden;
`;
