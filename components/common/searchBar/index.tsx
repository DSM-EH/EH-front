import styled from '@emotion/styled';
import { SearchBarType } from '@/types/searchBar';
import { Clue } from '@/assets';
import Image from 'next/image';
import { useState, useRef } from 'react';

const SearchBar = ({ placeholder, onChange, value, type, name }: SearchBarType) => {
  const [inputClick, setInputClick] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <_Wrapper>
      <_Input
        ref={ref}
        type={type}
        name={name}
        placeholder={inputClick ? '' : placeholder}
        onChange={onChange}
        value={value}
        autoComplete="off"
        onFocus={() => setInputClick(true)}
        onBlur={() => setInputClick(value ? true : false)}
      />
      <_ButtonImage src={Clue} alt="Clue" />
    </_Wrapper>
  );
};

export default SearchBar;

const _Wrapper = styled.div`
  width: 500px;
  height: 50px;
  border: 1px solid ${props => props.theme.color.gray500};
  background: ${props => props.theme.color.gray100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-radius: 8px;
`;

const _Input = styled.input`
  width: 90%;
  ${({ theme }) => theme.font.body4};
  ::placeholder {
    color: ${props => props.theme.color.gray500};
  }
`;

const _ButtonImage = styled(Image)`
  cursor: pointer;
`;
