import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { TextFieldType } from '@/types/textfield';
import { useState, useRef } from 'react';

const TextField = ({
  text,
  type,
  name,
  placeholder,
  value,
  error,
  errorMsg,
  onChange,
  width,
  height,
  pattern,
}: TextFieldType) => {
  const [inputClick, setInputClick] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <_Wrapper width={width} height={height}>
      <_UpperText inputClick={inputClick}>{text}</_UpperText>
      <_InputWrapper error={error} value={value}>
        <_Input
          ref={ref}
          type={type}
          name={name}
          pattern={pattern}
          placeholder={inputClick ? '' : placeholder}
          value={value === 0 ? '' : value}
          onChange={onChange}
          autoComplete="off"
          onFocus={() => setInputClick(true)}
          onBlur={() => setInputClick(value ? true : false)}
        />
      </_InputWrapper>
      {error && <_ErrorText>{errorMsg}</_ErrorText>}
    </_Wrapper>
  );
};

export default TextField;

const _Wrapper = styled.div<{ width?: number; height?: number }>`
  ${({ width = 554, height = 40 }) => css`
    width: ${width <= 100 ? `${width}px` : `${width}px`};
    height: ${height <= 100 ? `${height}px` : `${height}px`};
  `}
`;

const _InputWrapper = styled.div<{ error?: boolean; value?: string | number }>`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  padding: 6px 8px;
  border-bottom: 1px solid
    ${({ theme, value, error }) => (error ? theme.color.error : value ? theme.color.main01 : theme.color.gray400)};
  display: flex;
  align-items: center;
  :focus-within {
    border-bottom: 1px solid ${({ theme, error }) => (error ? theme.color.error : theme.color.main01)};
  }
`;

const _Input = styled.input`
  width: 100%;
  height: 28px;
  background: transparent;
  color: ${({ theme }) => theme.color.gray900};
  ${({ theme }) => theme.font.body4};
  line-height: 32px;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray300};
    line-height: 32px;
  }
`;

const _UpperText = styled.p<{ inputClick: boolean }>`
  height: 20px;
  ${({ theme }) => theme.font.body7};
  color: ${({ theme }) => theme.color.main01};
  opacity: ${({ inputClick }) => (inputClick ? 1 : 0)};
  animation: ${({ inputClick }) =>
    inputClick
      ? css`                    
          fadeIn 0.2s ease-in-out forwards
          `
      : css`
            fadeOut 0.2s ease-in-out forwards
      `};
`;

const _ErrorText = styled.span`
  ${({ theme }) => theme.font.body6};
  color: ${({ theme }) => theme.color.error};
  line-height: 22px;
`;
