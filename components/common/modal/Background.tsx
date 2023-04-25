import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

const ModalBackground = ({ children }: PropsType) => {
  return <_Wrapper>{children}</_Wrapper>;
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
`;