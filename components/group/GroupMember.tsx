import styled from '@emotion/styled';

interface MemberInformationType {
  id: number;
  email: string;
  password: string;
  nickname: string;
  description: string;
  profile_image_url: string;
  onClick: (information: any) => void;
}

const GroupMember = (props: MemberInformationType) => {
  const { id, email, password, nickname, description, profile_image_url, onClick }: MemberInformationType = props;
  return (
    <_Wrapper onClick={() => onClick(props)}>
      <_ProfileImage src={profile_image_url} alt={nickname} />
      <_NameText>{nickname}</_NameText>
    </_Wrapper>
  );
};

export default GroupMember;

const _Wrapper = styled.div`
  width: 200px;
  height: max-content;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const _ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 40px;
`;

const _NameText = styled.span`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme }) => theme.color.black};
`;
