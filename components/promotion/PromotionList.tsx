import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import CommunicationItem from './CommunicationItem';
import { getPostsApi } from '@/apis/getPosts';
import { customToast } from '@/utils/toast/toast';

interface PropsType {
  isLoading: boolean;
}

interface PostType {
  content: string;
  created_at: any;
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
}

const PromotionList = ({ isLoading }: PropsType) => {
  const [post, setPost] = useState<PostType[]>([]);

  useEffect(() => {
    const groupId = localStorage.getItem('groupId');

    if (!groupId) {
      customToast('잘못된 접근입니다.', 'error');
      return;
    }

    getPostsApi(groupId)
      .then(res => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('개발자 잘못', 'error');
      });
  }, []);

  return (
    <_Wrapper>
      {post?.map((element: PostType) => (
        <CommunicationItem postId={element.id} isLoading={isLoading} key={element.id} {...element} />
      ))}
    </_Wrapper>
  );
};

export default PromotionList;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 120px;
`;
