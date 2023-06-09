import styled from '@emotion/styled';
import { HTMLAttributes, ReactNode } from 'react';

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  modalName: string;
}

const ModalBackground = ({ children, modalName, ...rest }: PropsType) => {
  return <_Wrapper {...rest}>{children}</_Wrapper>;
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
