import styled from '@emotion/styled';
import { useEffect } from 'react';
import CommunicationItem from './CommunicationItem';
import { getPostsApi } from '@/apis/getPosts';
import { customToast } from '@/utils/toast/toast';
import { useQuery } from 'react-query';

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
  const { data: post } = useQuery<PostType[]>('posts', async () => {
    const groupId: string | null = localStorage.getItem('groupId');

    if (!groupId) {
      customToast('잘못된 접근입니다.', 'error');
      return Promise.reject(new Error('잘못된 접근입니다.'));
    }

    return getPostsApi(groupId).then(res => res.data);
  });

  useEffect(() => {
    if (!post) return;
    console.log(post);
  }, [post]);

  return (
    <_Wrapper>
      {post?.map((element: PostType) => (
        <CommunicationItem isLoading={isLoading} key={element.id} {...element} />
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
