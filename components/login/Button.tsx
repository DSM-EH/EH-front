import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import { ButtonHTMLAttributes } from 'react';

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  imageUrl?: StaticImageData;
}

const LoginButton = ({ text, imageUrl, ...rest }: PropsType) => {
  return (
    <_ButtonWrapper {...rest}>
      {imageUrl && <_LogoImage src={imageUrl} alt={text} />}
      <_Text>{text}</_Text>
    </_ButtonWrapper>
  );
};

export default LoginButton;

const _ButtonWrapper = styled.button`
  width: 450px;
  height: 50px;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.color.gray500};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const _LogoImage = styled(Image)`
  margin-right: 30px;
`;

const _Text = styled.span`
  ${({ theme }) => theme.font.body5};
  color: ${({ theme }) => theme.color.gray600};
`;