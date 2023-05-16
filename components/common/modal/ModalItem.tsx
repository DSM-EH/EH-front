import transitions from '@/lib/styles/transitions';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactNode, HTMLAttributes } from 'react';

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  height?: number;
  modal: boolean;
}

const ModalItem = ({ children, height, modal, ...rest }: PropsType) => {
  return (
    <_Wrapper {...rest} modal={modal} height={height}>
      {children}
    </_Wrapper>
  );
};

export default ModalItem;

const _Wrapper = styled.div<{ height?: number; modal: boolean }>`
  width: 650px;
  height: ${({ height = 320 }) => height}px;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  justify-content: space-between;
  ${props =>
    props.modal
      ? css`
          animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
        `
      : css`
          animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
        `}
`;
