import styled from '@emotion/styled';
import { GroupItemType } from '@/utils/constants/group';

interface GroupType {
  id: number;
  title: string;
  profile_image: string;
  background_image: string;
  description: string;
  poster_image: string;
  max_people: number;
  set_time: string;
}

const ProfileGroupItem = ({ title, description, profile_image, max_people }: GroupType) => {
  const onClick = () => {
    window.location.href = `/group/${title}`;
  };

  return (
    <_Wrapper onClick={onClick}>
      <_Image src={profile_image} alt={title} />
      <_InformationWrapper>
        <_Title>{title}</_Title>
        <_InnerWrapper>
          <_Content>{description}</_Content>
          <_MemberText>{max_people}명</_MemberText>
        </_InnerWrapper>
      </_InformationWrapper>
    </_Wrapper>
  );
};

export default ProfileGroupItem;

const _Wrapper = styled.li`
  width: 940px;
  height: 150px;
  display: flex;
  align-items: center;
  padding: 25px;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 5px;
  cursor: pointer;
`;

const _Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 30px;
`;

const _InformationWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const _Title = styled.p`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.title2};
`;

const _Content = styled.p`
  color: ${({ theme }) => theme.color.gray600};
  ${({ theme }) => theme.font.body4};
  width: 650px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const _MemberText = styled.span`
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body4};
  margin-left: 30px;
`;

const _InnerWrapper = styled.div`
  display: flex;
`;
