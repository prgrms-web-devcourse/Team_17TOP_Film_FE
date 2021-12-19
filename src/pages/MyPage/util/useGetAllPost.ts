import { useEffect, useState } from 'react';
import Toast from '../../../components/organism/Toast';
import { UNEXPECTED_ERROR } from '../../../utils/apis/config/constants';
import getAllPostsApi, { Post } from '../../../utils/apis/posts/myPagePosts';

const useGetAllPost = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);

  const getAllPosts = async () => {
    const { data } = await getAllPostsApi();
    if (!data) {
      return Toast.info(UNEXPECTED_ERROR);
    }
    setPosts(data);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return posts;
};

export default useGetAllPost;
