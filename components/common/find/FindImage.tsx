import styled from '@emotion/styled';
import { FindImageLogo } from '@/assets';
import Image from 'next/image';
import { ChangeEvent, useState, useMemo, useRef, RefObject } from 'react';

interface UploadType {
  file: File;
  thumbnail: string;
  type: string;
}

interface PropsType {
  name: 'imageUrl' | 'groupBackgroundImageUrl' | 'posterImageUrl' | 'profileImageUrl';
  height?: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FindImage = ({ name, height, onChange }: PropsType) => {
  const [image, setImage] = useState<UploadType>();
  const imageRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const showImage = useMemo(() => {
    if (!image && image === undefined) {
      return (
        <>
          <Image src={FindImageLogo} alt="FindImage" />
          <_Text>이미지를 선택하세요</_Text>
        </>
      );
    }
    return <Image src={image?.thumbnail} alt={image?.type} />;
  }, [image]);

  return (
    <_Wrapper height={height} onClick={() => imageRef.current?.click()}>
      {showImage}
      <_FileSelector ref={imageRef} type="file" accept="image/*" onChange={(e) => { onChange(e); }} />
    </_Wrapper>
  );
};

export default FindImage;

const _Wrapper = styled.form<{ height?: number }>`
  width: 340px;
  height: ${({ height = 200 }) => `${height}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${({ theme }) => theme.color.gray300};
  cursor: pointer;
`;

const _FileSelector = styled.input`
  width: 340px;
  height: 200px;
  display: none;
`;

const _Text = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.gray300};
  ${({ theme }) => theme.font.body5};
`;
