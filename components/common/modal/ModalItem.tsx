import styled from '@emotion/styled';
import { ReactNode, HTMLAttributes } from 'react';

interface PropsType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  height?: number;
}

const ModalItem = ({ children, height, ...rest }: PropsType) => {
  return (
    <_Wrapper {...rest} height={height}>
      {children}
    </_Wrapper>
  );
};

export default ModalItem;

const _Wrapper = styled.div<{ height?: number }>`
  width: 650px;
  height: ${({ height = 320 }) => height}px;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 15px;
`;
