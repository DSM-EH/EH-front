import styled from '@emotion/styled';
import { ChangeEvent, useState, useEffect } from 'react';
import SearchBar from '@/components/common/searchBar';
import Button from '../common/button';
import GroupItem from './GroupItem';
import Link from 'next/link';
import { getGroupAll } from '@/apis/getGroupAll';
import { GroupType } from '@/types/group';
import { customToast } from '@/utils/toast/toast';

const GroupPart = () => {
  const [search, setSearch] = useState<string>('');
  const [groupData, setGroupData] = useState<GroupType[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getGroupAll()
      .then(res => {
        console.log(res);
        setGroupData(res.data);
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('개발자 에러', 'error');
      });
  }, []);

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
      <_ListWrapper length={groupData.length}>
        {groupData.map((element: GroupType) => (
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

const _ListWrapper = styled.div<{ length: number }>`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
