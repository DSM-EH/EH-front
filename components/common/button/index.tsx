import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { color } from '@/styles/theme/color';
import { ButtonPropsType, ButtonStyleType } from '@/types/button';

const Button = ({ children, ...rest }: ButtonPropsType) => {
  return <_Button {...rest}>{children}</_Button>;
};

export default Button;

const _Button = styled.button<ButtonStyleType>`
  padding: 8px 40px;
  border-radius: 10px;
  ${({ theme }) => theme.font.body3};
  cursor: pointer;
  background-color: transparent;
  ${({ buttonColor = 'white', fontColor = 'white' }) => css`
    border: 1px solid ${color[buttonColor]};
    color: ${color[fontColor]};
    :hover {
      background-color: ${color[buttonColor]};
      color: ${color['white']};
    }
  `};
`;
