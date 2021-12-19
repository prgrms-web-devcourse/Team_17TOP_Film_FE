import { authInstance } from '../config/createInstance';

const getAllPostsApi = async () => authInstance.get<AllPosts>('/api/v1/mypage/posts');

interface AllPosts {
  data: Post[] | null;
}
export interface Post {
  postId: number;
  availableAt: string;
  title: string;
  previewText: string;
  state: 'OPENED' | 'CLOSED';
  authorityCount: number; // 열람가능한 인원수..?
  authorNickname: string;
  // Todo
  // 나중에 imageUrl 필수로 변경하기
  authorityImageList: { imageOrder: number; authorityId: number; imageUrl?: string }[];
  location: { latitude: string; longitude: string };
}
export default getAllPostsApi;
