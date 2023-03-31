import styled from '@emotion/styled';
import { ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

const Wrapper = ({ children }: PropsType) => {
  return <_Wrapper>{children}</_Wrapper>;
};

export default Wrapper;

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;
