import { ErrorType } from '../config/type';

export interface Post {
  postId: number;
  state: string;
  location: {
    latitude: string;
    longitude: string;
  };
}

export interface PreviewPost {
  postId: number;
  title: string;
  previewText: string;
  availableAt: string;
  state: string;
  location: {
    latitude: string;
    longitude: string;
  };
  authorNickname: string;
  authorityCount: number;
  authorityImageList: {
    imageOrder: number;
    authorityId: number;
    imageUrl: string;
  }[];
}

export interface PostListApi {
  data: {
    posts: Post[];
  };
  error: ErrorType;
}
export interface PreviewPostApi {
  data: PreviewPost;
  error: ErrorType;
}

export interface DeletePostApi {
  data: {
    postId: number;
  };
  error: ErrorType;
}
