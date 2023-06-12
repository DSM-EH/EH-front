import styled from '@emotion/styled';
import ModalItem from './ModalItem';
import ModalBackground from './Background';
import { useModal } from '@/hooks/useModal';
import { useState, MouseEvent, ChangeEvent, useMemo, useRef, useEffect } from 'react';
import TextField from '../textfield';
import { uploadImage } from '@/apis/uploadImage';
import { ModifyProfileType } from '@/types/modify';
import { FindImageLogo } from '@/assets';
import Image from 'next/image';
import { getUserProfile } from '@/apis/getUserProfile';
import Button from '../button';
import { modifyProfile } from '@/apis/modifyProfile';
import { customToast } from '@/utils/toast/toast';

interface PropsType {
  state: number;
  setState: (state: number) => void;
}

const ModifyProfile = ({ state, setState }: PropsType) => {
  const { modal, closeModal } = useModal('Modify');
  const [visible, setVisible] = useState<boolean>(modal.isOpen);
  const [imageState, setImageState] = useState<string>('');
  const [modifyProfileState, setModifyProfileState] = useState<ModifyProfileType>({
    email: '',
    password: '',
    nickname: '',
    description: '',
    profile_image_url: '',
  });
  const ref = useRef<HTMLInputElement>(null);

  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const backgroundOnClick = () => {
    setVisible(false);
    setTimeout(() => {
      closeModal();
    }, 200);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList: FileList | null = e.target.files;
    const formData: FormData = new FormData();

    if (fileList && fileList[0]) {
      formData.append('file', fileList[0]);

      uploadImage(formData).then(res => {
        console.log(res);
        setModifyProfileState((prevState: ModifyProfileType) => ({
          ...prevState,
          profile_image_url: res.data.file_url,
        }));
        setImageState(res.data.file_url);
      });
    }
  };

  const showImage = useMemo(() => {
    if (!imageState) {
      return (
        <>
          <Image src={FindImageLogo} alt="FindImage" />
          <_Text>이미지를 선택하세요</_Text>
        </>
      );
    }
    return <_Image src={imageState} alt="Profile" />;
  }, [imageState]);

  const textOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setModifyProfileState({ ...modifyProfileState, [name]: value });
  };

  const saveProfileOnClick = () => {
    modifyProfile(modifyProfileState)
      .then(res => {
        console.log('셩공');
        console.log(res);
        customToast('프로필 수정이 완료되었습니다.', 'success');
        setState(state + 1);
        closeModal();
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('개발자 에러', 'error');
      });
  };

  useEffect(() => {
    const email: string | null = localStorage.getItem('email');

    if (!email) return;

    getUserProfile(email)
      .then(res => {
        console.log(res);
        setModifyProfileState({
          ...res.data,
        });
        setImageState(res.data.profile_image_url);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, []);

  return (
    <ModalBackground modalName={'Modify'} onClick={backgroundOnClick}>
      <ModalItem modal={visible} onClick={onClick} height={700}>
        <_Title>내 프로필 수정</_Title>
        <_SelectImageWrapper onClick={() => ref.current?.click()}>
          {showImage}
          <_FileSelector ref={ref} type="file" accept="image/*" onChange={onChange} />
        </_SelectImageWrapper>
        <_TextField
          placeholder="변경하실 이름을 작성해주세요."
          value={modifyProfileState.nickname}
          name="nickname"
          onChange={textOnChange}
          text="이름"
          width={350}
        />
        <_TextField
          placeholder="변경하실 한 줄 소개를 작성해주세요."
          value={modifyProfileState.description}
          name="description"
          onChange={textOnChange}
          text="한줄 소개"
          width={350}
        />
        <_Button buttonColor="main01" fontColor="main01" onClick={saveProfileOnClick}>
          저장
        </_Button>
      </ModalItem>
    </ModalBackground>
  );
};

export default ModifyProfile;

const _Title = styled.strong`
  width: 100%;
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 40px;
  padding: 0 60px;
`;

const _Text = styled.p`
  margin-top: 10px;
  color: ${({ theme }) => theme.color.gray300};
  ${({ theme }) => theme.font.body5};
`;

const _SelectImageWrapper = styled.form`
  width: 150px;
  height: 150px;
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

const _TextField = styled(TextField)`
  width: 350px;
  margin-bottom: 50px;
`;

const _Button = styled(Button)`
  margin-top: 50px;
`;

const _Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
`;
