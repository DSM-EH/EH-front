import styled from '@emotion/styled';
import Button from '../button';

interface MemberInformationType {
  id: number;
  email: string;
  password: string;
  nickname: string;
  description: string;
  profile_image_url: string;
}

const GroupMemberModal = ({ id, email, password, nickname, description, profile_image_url }: MemberInformationType) => {
  return (
    <_Wrapper>
      <_Title>그룹 멤버</_Title>
      <_InnerWrapper>
        <_ProfileImage src={profile_image_url} alt={nickname} />
        <_InformationWrapper>
          <div>
            <_SmallTitle>이름</_SmallTitle>
            <_ValueText>{nickname}</_ValueText>
          </div>
          <div>
            <_SmallTitle>한줄 소개</_SmallTitle>
            <_ValueText>{description === '' ? '설명이 비어있습니다.' : description}</_ValueText>
          </div>
        </_InformationWrapper>
      </_InnerWrapper>
      <_ButtonWrapper>
        <_Button buttonColor="error" fontColor="error">
          추방
        </_Button>
        <Button buttonColor="main01" fontColor="main01">
          자세히보기
        </Button>
      </_ButtonWrapper>
    </_Wrapper>
  );
};

export default GroupMemberModal;

const _Wrapper = styled.div`
  width: 650px;
  height: 500px;
  background-color: ${({ theme }) => theme.color.background};
  border-radius: 15px;
  padding: 50px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title3};
  color: ${({ theme }) => theme.color.black};
`;

const _ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 15px;
`;

const _InnerWrapper = styled.div`
  display: flex;
`;

const _ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const _Button = styled(Button)`
  margin-right: 25px;
`;

const _InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 25px;
`;

const _SmallTitle = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.black};
  margin-right: 40px;
`;

const _ValueText = styled.span`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.black};
`;
