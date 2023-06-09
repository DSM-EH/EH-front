import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

interface PropsType {
  name: string;
  profileImageUrl: string | StaticImageData;
  createAt: string;
  onClick: (e?: MouseEvent) => void;
}

const GroupMember = ({ name, profileImageUrl, createAt, onClick }: PropsType) => {
  return (
    <_Wrapper onClick={() => onClick()}>
      <span>Test</span>
    </_Wrapper>
  );
};

export default GroupMember;

const _Wrapper = styled.div``;
