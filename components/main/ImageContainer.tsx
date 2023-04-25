import styled from '@emotion/styled';
import { Introduce } from '@/assets';
import Image from 'next/image';

const ImageContainer = () => {
  return (
    <_Wrapper>
      <_Image src={Introduce} alt="Introddce" />
      <_CoverImage>
        <_TextContainer>
          <span>운동과 식단관리로</span>
          <span>
            <_Emphasize>EH</_Emphasize>에서 건강한 몸을 만들어보죠 !
          </span>
        </_TextContainer>
      </_CoverImage>
    </_Wrapper>
  );
};

export default ImageContainer;

const _Wrapper = styled.div`
  width: 100vw;
  height: 500px;
`;

const _Image = styled(Image)`
  width: 100vw;
  height: 500px;
  z-index: -1;
  position: absolute;
`;

const _CoverImage = styled.div`
  width: 100vw;
  height: 500px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _TextContainer = styled.div`
  height: 25%;
  color: ${({ theme }) => theme.color.gray100};
  ${({ theme }) => theme.font.title1};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const _Emphasize = styled.span`
  color: ${({ theme }) => theme.color.main01};
`;
