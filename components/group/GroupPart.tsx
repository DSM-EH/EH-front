import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import SearchBar from '@/components/common/searchBar';
import Button from '../common/button';
import { GroupItemData, GroupItemType } from '@/utils/constants/group';
import GroupItem from './GroupItem';
import Link from 'next/link';

const GroupPart = () => {
  const [search, setSearch] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <_Wrapper>
      <_UpperWrapper>
        <_Title>운동 그룹 모집</_Title>
        <SearchBar placeholder="검색어를 입력해주세요" onChange={onChange} value={search} type="text" />
      </_UpperWrapper>
      <_ButtonWrapper>
        <Link href="/group/create">
          <Button buttonColor="main01" fontColor="main01">
            그룹 추가
          </Button>
        </Link>
      </_ButtonWrapper>
      <_ListWrapper>
        {GroupItemData.map((element: GroupItemType) => (
          <GroupItem key={element.id} {...element} />
        ))}
      </_ListWrapper>
    </_Wrapper>
  );
};

export default GroupPart;

const _Wrapper = styled.div`
  width: 100vw;
  padding: 4.0625rem 18rem;
  display: flex;
  flex-direction: column;
`;

const _UpperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const _Title = styled.span`
  ${({ theme }) => theme.font.title2};
`;

const _ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
`;

const _ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
