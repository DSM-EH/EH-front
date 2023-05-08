import styled from '@emotion/styled';
import { ReactNode, MouseEvent } from 'react';

interface PropsType {
  children: ReactNode;
  height: number;
}

const ModalItem = ({ children, height }: PropsType) => {
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  return (
    <_Wrapper onClick={onClick} height={height}>
      {children}
    </_Wrapper>
  );
};

export default ModalItem;

const _Wrapper = styled.div<{ height: number }>`
  width: 650px;
  height: ${({ height = 320 }) => height}px;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 15px;
`;
