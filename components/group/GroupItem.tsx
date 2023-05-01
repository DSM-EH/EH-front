import Image, { StaticImageData } from 'next/image';
import styled from '@emotion/styled';

interface PropsType {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  nowMember: number;
  maxMember: number;
}

const GroupItem = ({ title, description, imageUrl, nowMember, maxMember }: PropsType) => {
  return (
    <_Wrapper>
      <_Image src={imageUrl} alt={title} />
      <_InnerWrapper>
        <_InformationWrapper>
          <_Title>{title}</_Title>
          <_Description>{description}</_Description>
        </_InformationWrapper>
        <_MemberWrapper>
          <_MemberCount>
            {nowMember} / {maxMember} 명
          </_MemberCount>
        </_MemberWrapper>
      </_InnerWrapper>
    </_Wrapper>
  );
};

export default GroupItem;

const _Wrapper = styled.div`
  width: 500px;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  margin-bottom: 35px;
  animation: sizedown 0.4s;
  cursor: pointer;
  :hover {
    animation: sizeup 0.4s;
    animation-fill-mode: forwards;
  }
`;

const _Image = styled(Image)`
  width: 100%;
  height: 9.375rem;
  border-radius: 0.5rem 0.5rem 0px 0px;
`;

const _InformationWrapper = styled.div`
  min-height: 50%;
  display: flex;
  flex-direction: column;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 15px;
`;

const _Description = styled.p`
  width: 100%;
  ${({ theme }) => theme.font.body4};
  white-space: normal;
`;

const _MemberWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const _MemberCount = styled.p`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.main01};
`;

const _InnerWrapper = styled.div`
  height: 100%;
  padding: 1.25rem 1.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
