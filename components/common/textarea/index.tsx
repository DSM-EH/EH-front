import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import { TextareaType } from '@/types/textarea';

const Textarea = ({ name, placeholder, value, label, onChange }: TextareaType) => {
  const [inputClick, setInputClick] = useState<boolean>(false);

  const MaxLengthOnChange = (e: ChangeEvent<HTMLTextAreaElement>): boolean => {
    if (value.length > 500) {
      alert('500자 이내로 작성해주세요.');
      return false;
    }
    return true;
  };

  return (
    <_Wrapper>
      <_Text inputClick={inputClick}>{label}</_Text>
      <_TextAreaBackground>
        <_Textarea
          name={name}
          value={value}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            if (MaxLengthOnChange(e)) onChange(e);
          }}
          placeholder={placeholder}
          onFocus={() => setInputClick(true)}
          onBlur={() => setInputClick(value ? true : false)}
          maxLength={500}
        />
      </_TextAreaBackground>
      <_CountText>({value.length} / 500)</_CountText>
    </_Wrapper>
  );
};

export default Textarea;

const _Wrapper = styled.div`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
`;

const _TextAreaBackground = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.color.background};
  border: 1px solid ${({ theme }) => theme.color.gray500};
  border-radius: 8px;
`;

const _Text = styled.p<{ inputClick: boolean }>`
  color: ${({ theme }) => theme.color.gray900};
  ${({ theme }) => theme.font.title3};
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

const _Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  background: transparent;
  ${({ theme }) => theme.font.body4};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray400};
  }
`;

const _CountText = styled.span`
  padding: 12px 14px;
  text-align: end;
`;
