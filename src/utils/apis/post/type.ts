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

export interface PostDetail {
  postId: number;
  title: string;
  content: string;
  imgaeUrls: {
    imageOrder: number;
    imageUrl: string;
  }[];
  authorNickname: string;
  authorImageUrl: string;
  createdAt: string;
  authorityImageList: {
    imageOrder: number;
    authorityId: number;
    imageUrl: string;
  }[];
  location: {
    latitude: string;
    longitude: string;
  };
  openerNickname: string;
  openerImageUrl: string;
  isOpened: boolean;
  openedAt: string;
  previewText: string;
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
export interface PostDetailApi {
  data: PostDetail;
  error: ErrorType;
}
