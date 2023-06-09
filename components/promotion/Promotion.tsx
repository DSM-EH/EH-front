import skeleton from '@/lib/styles/skeleton';
import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';

interface PropsType {
  title: string;
  contents: string;
  recruitmentMember: number;
  gatheringTime: string;
  imageUrl: string | StaticImageData;
  isLoading: boolean;
}

const Promotion = ({ title, contents, recruitmentMember, gatheringTime, imageUrl, isLoading }: PropsType) => {
  return (
    <_Wrapper>
      {isLoading ? <_SkeletonText /> : <_Title>{title}</_Title>}
      <_ContentsWrapper>
        {contents.split('\n').map((line: string, index: number) =>
          isLoading ? (
            <_SkeletonText key={index} />
          ) : (
            <span key={index}>
              {line}
              <br />
            </span>
          ),
        )}
      </_ContentsWrapper>
      <_SmallTitleWrapper>
        <_SmallTitle>모집인원</_SmallTitle>
        {isLoading ? <_SkeletonText /> : <_SmallContents>{recruitmentMember}명</_SmallContents>}
      </_SmallTitleWrapper>
      <_SmallTitleWrapper>
        <_SmallTitle>모집 시간</_SmallTitle>
        {isLoading ? <_SkeletonText /> : <_SmallContents>{gatheringTime}</_SmallContents>}
      </_SmallTitleWrapper>
      {isLoading ? <_SkeletonImage /> : <_Image src={imageUrl} alt={title} />}
    </_Wrapper>
  );
};

export default Promotion;

const _Wrapper = styled.div`
  width: 700px;
  padding: 30px 40px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 10px;
  margin-bottom: 30px;
`;

const _SkeletonText = styled.div`
  width: 100%;
  height: 30px;
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
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

const _SkeletonImage = styled.div`
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
`;
