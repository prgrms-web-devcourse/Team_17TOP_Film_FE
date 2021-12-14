import { ErrorType } from '../config/type';

export interface PostList {
  data: {
    postId: number;
    state: string;
    location: {
      latitude: string;
      longitude: string;
    };
  }[];
  error: ErrorType;
}
export interface PreviewPost {
  data: {
    postId: number;
    title: string;
    previewText: string;
    availableAt: string;
    state: string;
    location: {
      latitude: string;
      longitude: string;
    };
    authorityCount: number;
    authorityImageList: {
      imageOrder: number;
      authorityId: number;
      imageUrl: string;
    }[];
  };
  error: ErrorType;
}
