import { ErrorType } from '../../config/type';

export interface CreatePostApi {
  data: {
    postId: number;
    title: string;
    previewText: string;
    availableAt: string;
    state: string;
    location: { latitude: string; longitude: string };
    authorityCount: number;
    authorityImageList: { imageOrder: number; authorityId: number; imageUrl: string }[];
  };
  error: ErrorType;
}
