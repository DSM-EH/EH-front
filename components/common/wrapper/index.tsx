import styled from '@emotion/styled';

interface PropsType {
  children: React.ReactNode;
}

const Wrapper = ({ children }: PropsType) => {
  return <_Wrapper>{children}</_Wrapper>;
};

export default Wrapper;

const _Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
`;
