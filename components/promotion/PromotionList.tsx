import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Promotion from './Promotion';
import { promotion } from '@/utils/constants/promotion';
import CommunicationItem from './CommunicationItem';
import { getPostsApi } from '@/apis/getPosts';
import { customToast } from '@/utils/toast/toast';

interface ListType {
  [key: string]: boolean;
}

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
  const [list, setList] = useState<ListType>({
    전체: true,
    소통: false,
    홍보: false,
  });
  const [post, setPost] = useState<PostType[]>([]);

  useEffect(() => {
    const groupId = localStorage.getItem('groupId');
    
    if(!groupId) return;

    getPostsApi(groupId)
      .then(res => {
        const { data } = res;
        console.log(data);
        setPost(data);
      })
      .catch((err: unknown) => {
        console.error(err);
        customToast('why error', 'error');
      });
  }, []);

  const onClick = (item: string) => {
    const updatedList: ListType = Object.keys(list).reduce(
      (acc: ListType, key: string) => ({ ...acc, [key]: false }),
      {},
    );
    updatedList[item] = true;

    setList(updatedList);
  };

  return (
    <_Wrapper>
      <_TextWrapper>
        {Object.keys(list).map((item: string, index: number) => (
          <_Text clicked={list[item]} key={index} onClick={() => onClick(item)}>
            {item}
          </_Text>
        ))}
      </_TextWrapper>
      {list['전체'] ? (
        <>
          <Promotion isLoading={isLoading} {...promotion} />
          {post.map(element => (
            <CommunicationItem isLoading={isLoading} key={element.id} {...element} />
          ))}
        </>
      ) : list['홍보'] ? (
        <Promotion isLoading={isLoading} {...promotion} />
      ) : (
        post.map(element => <CommunicationItem key={element.id} isLoading={isLoading} {...element} />)
      )}
    </_Wrapper>
  );
};

export default PromotionList;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 120px;
`;

const _TextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const _Text = styled.span<{ clicked: boolean }>`
  ${({ theme }) => theme.font.body3};
  color: ${({ theme, clicked }) => (clicked ? theme.color.black : theme.color.gray500)};
  cursor: pointer;
  margin-right: 40px;
  :hover {
    color: ${({ theme }) => theme.color.black};
  }
`;
