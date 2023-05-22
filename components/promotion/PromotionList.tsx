import styled from '@emotion/styled';
import { useState } from 'react';
import Promotion from './Promotion';
import { promotion } from '@/utils/constants/promotion';

interface ListType {
  [key: string]: boolean;
}

const PromotionList = () => {
  const [list, setList] = useState<ListType>({
    전체: true,
    소통: false,
    홍보: false,
  });

  const onClick = (item: string) => {
    const updatedList: ListType = Object.keys(list).reduce(
      (acc: ListType, key: string) => ({ ...acc, [key]: false }),
      {},
    );
    updatedList[item] = true;

    setList(updatedList);
  };

  return (
    <_Wrapper>
      <_TextWrapper>
        {Object.keys(list).map((item: string, index: number) => (
          <_Text clicked={list[item]} key={index} onClick={() => onClick(item)}>
            {item}
          </_Text>
        ))}
      </_TextWrapper>
      {list['전체'] ? <Promotion {...promotion} /> : list['홍보'] && <Promotion {...promotion} />}
    </_Wrapper>
  );
};

export default PromotionList;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 120px;
`;

const _TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const _Text = styled.span<{ clicked: boolean }>`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme, clicked }) => (clicked ? theme.color.black : theme.color.gray500)};
  cursor: pointer;
  margin-right: 40px;
  :hover {
    color: ${({ theme }) => theme.color.black};
  }
`;
