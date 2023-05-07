import styled from '@emotion/styled';
import TextField from '../common/textfield';
import { ChangeEvent, useState } from 'react';
import { CreateGroupType } from '@/types/group';
import FindImage from '../common/find/FindImage';
import Textarea from '../common/textarea';
import Button from '../common/button';

const CreateGroup = () => {
  const [createGroup, setCreateGroup] = useState<CreateGroupType>({
    title: '',
    imageUrl: '',
    introduce: '',
    groupBackgroundImageUrl: '',
    contents: '',
    posterImageUrl: '',
    member: 0,
    time: '',
  });

  const numberCheck = (value: string) => {
    const numberRegEx: RegExp = /[a-z]|[0-9]/;
    if ((value != '' && !numberRegEx.test(value)) || Number(value) < 0) {
      alert('숫자만 입력해주세요.');
      return false;
    }
    return true;
  };

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    let numberCheckResult: boolean = true;
    if (name === 'member') {
      numberCheckResult = numberCheck(value);
    }
    if (numberCheckResult) setCreateGroup({ ...createGroup, [name]: value });
  };

  return (
    <_Wrapper>
      <_Title>그룹 생성</_Title>
      <TextField
        text="제목"
        placeholder="제목을 입력해주세요."
        onChange={onChange}
        name="title"
        value={createGroup.title}
        width={100}
      />
      <_ImageInputWrapper>
        <_SmallTitle>그룹 이미지</_SmallTitle>
        <FindImage name="imageUrl" />
      </_ImageInputWrapper>
      <TextField
        text="그룹 소개"
        placeholder="그룹 소개를 적어주세요."
        onChange={onChange}
        name="introduce"
        value={createGroup.introduce}
        width={100}
      />
      <_ImageInputWrapper>
        <_SmallTitle>그룹 이미지</_SmallTitle>
        <FindImage name="groupBackgroundImageUrl" />
      </_ImageInputWrapper>
      <Textarea
        name="contents"
        value={createGroup.contents}
        onChange={onChange}
        label="홍보 내용"
        placeholder="홍보 내용을 입력하세요."
      />
      <_ImageInputWrapper>
        <_SmallTitle>홍보 포스터</_SmallTitle>
        <FindImage name="posterImageUrl" height={500} />
      </_ImageInputWrapper>
      <_ImageInputWrapper>
        <TextField
          text="모집 인원"
          placeholder="모집 인원 수를 입력해주세요."
          pattern="[0-9]*"
          onChange={onChange}
          name="member"
          value={createGroup.member}
          width={100}
        />
      </_ImageInputWrapper>
      <_ImageInputWrapper>
        <TextField
          text="모이는 시간"
          placeholder="모이는 시간을 입력해주세요."
          onChange={onChange}
          name="time"
          value={createGroup.title}
          width={100}
        />
      </_ImageInputWrapper>
      <Button buttonColor="main01" fontColor="main01">
        그룹 생성
      </Button>
    </_Wrapper>
  );
};

export default CreateGroup;

const _Wrapper = styled.div`
  padding: 100px 370px;
  display: flex;
  flex-direction: column;
`;

const _Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.title1};
  margin-bottom: 80px;
`;

const _SmallTitle = styled.p`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.title3};
  margin: 80px 0 20px 0;
`;

const _ImageInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;
