import { authInstance } from '../config/createInstance';
import { PostListApi, PreviewPostApi, DeletePostApi } from './type';

const getPostListApi = async () => {
  return authInstance.get<PostListApi>(`/api/v1/maps`);
};

const getPreviewPostApi = async (postId: number) => {
  return authInstance.get<PreviewPostApi>(`/api/v1/posts/${postId}`);
};

const deletePostApi = async (postId: number) => {
  return authInstance.delete<DeletePostApi>(`/api/v1/posts/${postId}`);
};

export { getPostListApi, getPreviewPostApi, deletePostApi };
