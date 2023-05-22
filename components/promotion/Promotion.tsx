import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';

interface PropsType {
  title: string;
  contents: string;
  recruitmentMember: number;
  gatheringTime: string;
  imageUrl: string | StaticImageData;
}

const Promotion = ({ title, contents, recruitmentMember, gatheringTime, imageUrl }: PropsType) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <_Wrapper>
      <_Title>{title}</_Title>
      <_ContentsWrapper>
        {contents.split('\n').map((line: string, index: number) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </_ContentsWrapper>
      <_SmallTitleWrapper>
        <_SmallTitle>모집인원</_SmallTitle>
        <_SmallContents>{recruitmentMember}명</_SmallContents>
      </_SmallTitleWrapper>
      <_SmallTitleWrapper>
        <_SmallTitle>모집 시간</_SmallTitle>
        <_SmallContents>{gatheringTime}</_SmallContents>
      </_SmallTitleWrapper>
      <_Image src={imageUrl} alt={title} />
    </_Wrapper>
  );
};

export default Promotion;

const _Wrapper = styled.div`
  width: 700px;
  padding: 30px 40px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 10px;
`;

const _Title = styled.strong`
  ${({ theme }) => theme.font.title2};
  color: ${({ theme }) => theme.color.black};
`;

const _ContentsWrapper = styled.div`
  margin-top: 30px;
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.black};
  line-height: 39px;
`;

const _SmallTitleWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const _SmallTitle = styled.span`
  width: 98px;
  height: 40px;
  vertical-align: middle;
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.black};
  margin-right: 35px;
`;

const _SmallContents = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.black};
`;

const _Image = styled(Image)`
  width: 100%;
  margin-top: 30px;
`;
