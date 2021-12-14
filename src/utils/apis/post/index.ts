import { authInstance } from '../config/createInstance';
import { PostList, PreviewPost } from './type';

const getPostList = async () => {
  return authInstance.get<PostList>(`/api/v1/maps`);
};

const getPreviewPost = async (postId: number) => {
  return authInstance.get<PreviewPost>(`/api/v1/posts/${postId}`);
};

export { getPostList, getPreviewPost };
