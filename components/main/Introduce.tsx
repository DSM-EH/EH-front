import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

interface PropsType {
  imageUrl: StaticImageData;
  reverse: boolean;
  text: string[];
}

const IntroduceContainer = ({ imageUrl, reverse, text }: PropsType) => {
  return (
    <_Wrapper reverse={reverse}>
      <Image src={imageUrl} alt="image" />
      <_TextWrapper>
        {text.map((str: string, idx: number) => (
          <_Text key={idx}>{str}</_Text>
        ))}
      </_TextWrapper>
    </_Wrapper>
  );
};

export default IntroduceContainer;

const _Wrapper = styled.section<{ reverse: boolean }>`
  width: 70%;
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-around;
  align-items: center;
  padding: 150px 0;
`;

const _TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const _Text = styled.p`
  ${({ theme }) => theme.font.title1};
  color: ${({ theme }) => theme.color.black};
`;
