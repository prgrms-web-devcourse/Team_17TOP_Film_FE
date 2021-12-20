import { ErrorType } from '../config/type';

export interface ChangeAuthorApiProps {
  authorList: { fixAuthorityList: { userId: number }[] };
  postId: number;
}

export interface ChangeAuthorApi {
  data: {
    postId: number;
    authorityList: [
      {
        imageOrder: number;
        authorityId: number;
        authorityNickName: string;
        imageUrl: string;
      },
      {
        imageOrder: number;
        authorityId: number;
        authorityNickName: string;
        imageUrl: string;
      },
    ];
  };
  error: ErrorType;
}
