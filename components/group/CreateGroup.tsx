import styled from '@emotion/styled';
import TextField from '../common/textfield';
import { ChangeEvent, useState, useMemo, useRef, RefObject } from 'react';
import { CreateGroupType } from '@/types/group';
import Textarea from '../common/textarea';
import Button from '../common/button';
import { createGroupApi } from '@/apis/createGroup';
import { customToast } from '@/utils/toast/toast';
import Image from 'next/image';
import { FindImageLogo } from '@/assets';
import { uploadImage } from '@/apis/uploadImage';

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
  const [imageState, setImageState] = useState<{
    imageUrl: string;
    groupBackgroundImageUrl: string;
    posterImageUrl: string;
  }>({
    imageUrl: '',
    groupBackgroundImageUrl: '',
    posterImageUrl: '',
  });
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const numberCheck = (value: string) => {
    const numberRegEx: RegExp = /[a-z]|[0-9]/;

    if ((value != '' && !numberRegEx.test(value)) || Number(value) < 0) {
      alert('숫자를 제대로 입력해주세요.');
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

  const imageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = e.target.files;
    const { name } = e.target;
    const formData: FormData = new FormData();

    if (fileList && fileList[0]) {
      formData.append('file', fileList[0]);
      uploadImage(formData)
        .then(res => {
          console.log(res);
          console.log(res.data.file_url);
          setImageState({ ...imageState, [name]: res.data.file_url });
          setCreateGroup({ ...createGroup, [name]: res.data.file_url });
        })
        .catch(err => {
          customToast('이미지 업로드에 실패했습니다.', 'error');
          console.error(err);
        });
    }
  };

  const ShowImage = (image: string, height: number, imageValue: string) =>
    useMemo(() => {
      if (!imageValue) {
        return (
          <>
            <Image src={FindImageLogo} alt="FindImage" />
            <_Text>이미지를 선택하세요</_Text>
          </>
        );
      }
      return <_Image src={imageValue} height={height} alt={image} />;
    }, [imageValue]);

  const onClick = () => {
    const email = localStorage.getItem('email');
    const date = new Date();

    if (!email) {
      customToast('로그인이 필요합니다.', 'error');
      return;
    }

    createGroupApi({
      email: email,
      title: createGroup.title,
      profile_image: createGroup.imageUrl,
      background_image: createGroup.groupBackgroundImageUrl,
      poster_image: createGroup.posterImageUrl,
      contents: createGroup.contents,
      description: createGroup.introduce,
      set_time: date,
      max_people: createGroup.member,
    })
      .then(res => {
        const prev: string = document.referrer;

        if (!prev) {
          customToast('잘못된 접근입니다.', 'error');
          return;
        }

        console.log(res);
        window.location.href = prev;
      })
      .catch((err: unknown) => {
        console.error(err);

        const prev: string = document.referrer;

        if (!prev) {
          customToast('잘못된 접근입니다.', 'error');
          return;
        }

        window.location.href = prev;
      });
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
        <_SelectImageWrapper height={200} onClick={() => ref.current?.click()}>
          {ShowImage(createGroup.groupBackgroundImageUrl, 200, imageState.imageUrl)}
          <_FileSelector ref={ref} type="file" accept="image/*" onChange={imageOnChange} name="imageUrl" />
        </_SelectImageWrapper>
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
        <_SmallTitle>그룹 배경 이미지</_SmallTitle>
        <_SelectImageWrapper height={200} onClick={() => ref1.current?.click()}>
          {ShowImage(createGroup.imageUrl, 200, imageState.groupBackgroundImageUrl)}
          <_FileSelector
            ref={ref1}
            type="file"
            accept="image/*"
            onChange={imageOnChange}
            name="groupBackgroundImageUrl"
          />
        </_SelectImageWrapper>
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
        <_SelectImageWrapper height={500} onClick={() => ref2.current?.click()}>
          {ShowImage(createGroup.posterImageUrl, 500, imageState.posterImageUrl)}
          <_FileSelector ref={ref2} type="file" accept="image/*" onChange={imageOnChange} name="posterImageUrl" />
        </_SelectImageWrapper>
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
          value={createGroup.time}
          width={100}
        />
      </_ImageInputWrapper>
      <Button onClick={onClick} buttonColor="main01" fontColor="main01">
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

const _Text = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.gray300};
  ${({ theme }) => theme.font.body5};
`;

const _Image = styled.img<{ height: number }>`
  width: 340px;
  height: ${({ height }) => `${height}px`};
`;

const _FileSelector = styled.input`
  width: 340px;
  height: 200px;
  display: none;
`;

const _SelectImageWrapper = styled.form<{ height: number }>`
  width: 340px;
  height: ${({ height = 200 }) => `${height}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${({ theme }) => theme.color.gray300};
  cursor: pointer;
`;
