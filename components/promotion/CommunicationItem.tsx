import styled from '@emotion/styled';
import Comment from './Comment';
import { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react';
import { getComment } from '@/apis/getComment';
import { createComment } from '@/apis/createComment';
import { customToast } from '@/utils/toast/toast';
import { getUserProfile } from '@/apis/getUserProfile';
import skeleton from '@/lib/styles/skeleton';
import { css } from '@emotion/react';

interface PropsType {
  content: string;
  created_at: Date;
  group: {
    id: number;
    title: string;
    profile_image: string;
    background_image: string;
    description: string;
  };
  id: number;
  is_promotion: boolean;
  title: string;
  writer: {
    id: number;
    email: string;
    password: string;
    nickname: string;
    description: string;
    profile_image_url: string;
  };
  isLoading: boolean;
  postId: number;
}

interface CommentType {
  content: string;
  id: number;
  writer: {
    description: string;
    email: string;
    id: number;
    nickname: string;
    password: string;
    profile_image_url: string;
  };
}

const CommunicationItem = ({
  content,
  created_at,
  group,
  id,
  is_promotion,
  title,
  writer,
  isLoading,
  postId,
}: PropsType) => {
  const [comment, setComment] = useState<CommentType[]>([]);
  const [commentState, setCommentState] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const date: Date = new Date(created_at);
  const [myImage, setMyImage] = useState<string>('');
  const formatDate: string = date.toLocaleDateString();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommentState(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const postId = localStorage.getItem('groupId');

      if (!postId) return;

      createComment(userId, postId, commentState)
        .then(res => {
          console.log(res);
          customToast('댓글 작성 성공!', 'success');
          setCommentState('');
        })
        .catch((err: unknown) => {
          console.error(err);
          customToast('댓글 작성 실패', 'error');
        });
    }
  };

  useEffect(() => {
    const groupId: string | null = localStorage.getItem('groupId');
    const email: string | null = localStorage.getItem('email');

    if (!groupId || !email) return;

    getUserProfile(email)
      .then(res => {
        setMyImage(res.data.profile_image_url);
        setUserId(res.data.id.toString());
      })
      .catch((err: unknown) => {
        console.error(err);
      });

    getComment(id.toString())
      .then(res => {
        console.log('data', res.data);
        setComment(res.data);
      })
      .catch((err: unknown) => {
        console.error(err);
      });
  }, [commentState]);

  return (
    <_Wrapper>
      {isLoading ? <_SkeletonText /> : <_Title>{title}</_Title>}
      <_UpperWrapper>
        {isLoading ? (
          <>
            <_SkeletonImage size={30} />
            <_SkeletonText width={60} />
            <_SkeletonText width={90} />
          </>
        ) : (
          <>
            <_ProfileImage src={writer.profile_image_url} alt="Profile" />
            <_Name>{writer.nickname}</_Name>
            <_Date>{formatDate}</_Date>
          </>
        )}
      </_UpperWrapper>
      <_ContentsText>
        {content.split('\n').map((value: string, index: number) => {
          if (isLoading) return <_SkeletonText />;
          return (
            <span key={index}>
              {value}
              <br />
            </span>
          );
        })}
      </_ContentsText>
      <_CommentWrapper>
        {isLoading ? <_SkeletonImage size={40} /> : <_CommentProfile src={myImage} alt="Profile" />}
        <_CommentInputWrapper>
          <_CommentInput
            placeholder="댓글을 입력해주세요."
            onKeyDown={onKeyDown}
            onChange={onChange}
            value={commentState}
          />
        </_CommentInputWrapper>
      </_CommentWrapper>
      {comment.map((element: CommentType) => {
        return <Comment isLoading={isLoading} key={element.id} {...element} />;
      })}
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

const _SkeletonImage = styled.div<{ size?: number }>`
  ${({ size = 40 }) =>
    css`
      width: ${size}px;
      height: ${size}px;
    `}
  width: 40px;
  height: 40px;
  margin-right: 20px;
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
`;

const _SkeletonText = styled.div<{ width?: number }>`
  width: ${({ width = 100 }) => (width < 100 ? `${width}px` : `${width}%`)};
  height: 30px;
  margin-right: 60px;
  background-color: ${({ theme }) => theme.color.gray200};
  animation: ${skeleton.skeletonAnimation} 1s infinite ease-in-out;
  cursor: progress;
`;

const _Title = styled.p`
  ${({ theme }) => theme.font.title2};
  color: ${({ theme }) => theme.color.black};
`;

const _ProfileImage = styled.img`
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
  margin-bottom: 10px;
`;

const _CommentWrapper = styled.div`
  display: flex;
  margin: 30px 0;
`;

const _CommentProfile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 20px;
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
