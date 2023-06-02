import styled from '@emotion/styled';
import { SignUpType } from '@/types/signup';
import { ChangeEvent, Dispatch, SetStateAction, useState, useMemo, useRef } from 'react';
import { FindImageLogo, Logo } from '@/assets';
import Image from 'next/image';
import Button from '../button';
import { useModal } from '@/hooks/useModal';
import { uploadImage } from '@/apis/uploadImage';
import { customToast } from '@/utils/toast/toast';
import { postSignUp } from '@/apis/signUp';

interface PropsType {
  signUpInformation: SignUpType;
  setSignUpInformation: Dispatch<SetStateAction<SignUpType>>;
}

const ProfileInit = ({ signUpInformation, setSignUpInformation }: PropsType) => {
  const { closeModal } = useModal('Login');
  const [image, setImage] = useState<string>('');
  const imageRef = useRef<HTMLInputElement>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = e.target.files;
    const formData: FormData = new FormData();

    if (fileList && fileList[0]) {
      formData.append('file', fileList[0]);
      uploadImage(formData)
        .then(res => {
          console.log(res); 
          setSignUpInformation({ ...signUpInformation, profileImageUrl: res.data.file_url });
          setImage(res.data.file_url);
        })
        .catch(err => {
          customToast('이미지 업로드에 실패했습니다.', 'error');
          console.error(err);
        });
    }
  };

  const onClick = () => {
    postSignUp({
      nickname: signUpInformation.name,
      password: signUpInformation.password,
      email: signUpInformation.email,
      description: '',
      profile_image_url: signUpInformation.profileImageUrl,
    })
      .then(res => {
        customToast('회원가입에 성공했습니다.', 'success');
        console.log(res);
        closeModal();
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('회원가입에 실패했습니다.', 'error');
      });
  };

  const showImage = useMemo(() => {
    if (!image && image === undefined) {
      return (
        <>
          <Image src={FindImageLogo} alt="FindImage" />
          <_Text>이미지를 선택하세요</_Text>
        </>
      );
    }
    return <Image src={image} alt="image" />;
  }, [image]);

  return (
    <>
      <Image src={Logo} alt="Logo" />
      <_Wrapper>
        <_Title>프로필 사진</_Title>
        {/* <FindImage height={300} name="profileImageUrl" onChange={onChange} /> */}
        <_SelectImageWrapper height={300} onClick={() => imageRef.current?.click()}>
          {showImage}
          <_FileSelector ref={imageRef} type="file" accept="image/*" onChange={onChange} />
        </_SelectImageWrapper>
        <Button onClick={onClick} buttonColor="main01" fontColor="main01">
          회원가입
        </Button>
      </_Wrapper>
    </>
  );
};

export default ProfileInit;

const _Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 80px;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
`;

const _SelectImageWrapper = styled.form<{ height?: number }>`
  width: 340px;
  height: ${({ height = 200 }) => `${height}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${({ theme }) => theme.color.gray300};
  cursor: pointer;
`;

const _FileSelector = styled.input`
  width: 340px;
  height: 200px;
  display: none;
`;

const _Text = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.gray300};
  ${({ theme }) => theme.font.body5};
`;
