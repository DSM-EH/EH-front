import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';
import Comment from './Comment';

interface PropsType {
  title: string;
  contents: string;
  profileImageUrl: string;
  name: string;
  date: string;
  imageUrl: string | StaticImageData;
  comment: {
    profileImageUrl: string;
    name: string;
    contents: string;
  }[];
}

const CommunicationItem = ({ title, contents, profileImageUrl, name, imageUrl, date, comment }: PropsType) => {
  return (
    <_Wrapper>
      <_Title>{title}</_Title>
      <_UpperWrapper>
        <_ProfileImage src={profileImageUrl} alt="Profile" />
        <_Name>{name}</_Name>
        <_Date>{date.split('-').join('.')}</_Date>
      </_UpperWrapper>
      <_ContentsText>
        {contents.split('\n').map((value: string, index: number) => (
          <span key={index}>
            {value}
            <br />
          </span>
        ))}
      </_ContentsText>
      <_CommunicationImage src={imageUrl} alt="Communication" />
      <_CommentWrapper>
        <_CommentProfile src={profileImageUrl} alt="Profile" />
        <_CommentInputWrapper>
          <_CommentInput placeholder="댓글을 입력해주세요." />
        </_CommentInputWrapper>
      </_CommentWrapper>
      {comment.map((element, index) => (
        <Comment key={index} {...element} />
      ))}
    </_Wrapper>
  );
};

export default CommunicationItem;

const _Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.gray100};
  border-radius: 10px;
  padding: 30px 40px;
  margin-bottom: 30px;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title2};
  color: ${({ theme }) => theme.color.black};
`;

const _ProfileImage = styled(Image)`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  margin-right: 20px;
`;

const _UpperWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 20px 0 20px 0;
`;

const _Name = styled.span`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.black};
  margin-right: 60px;
`;

const _Date = styled.span`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.black};
`;

const _ContentsText = styled.span`
  ${({ theme }) => theme.font.body4};
  color: ${({ theme }) => theme.color.black};
`;

const _CommunicationImage = styled(Image)`
  width: 620px;
  height: 400px;
  margin-bottom: 30px;
`;

const _CommentWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const _CommentProfile = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 8px;
`;

const _CommentInputWrapper = styled.div`
  width: 550px;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.color.gray600};
`;

const _CommentInput = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.color.black};
  ${({ theme }) => theme.font.body6};
  ::placeholder {
    color: ${({ theme }) => theme.color.gray600};
  }
`;
