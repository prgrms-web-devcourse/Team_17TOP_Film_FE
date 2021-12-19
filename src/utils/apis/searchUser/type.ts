import { ErrorType } from '../config/type';

export interface GetSearchUserProps {
  keyword: string;
  lastNickname: string;
  size: number;
}

interface userInfo {
  id: number;
  nickname: string;
  profileImageUrl: string;
}

export interface GetSearchUserApi {
  data: userInfo[];
  error: ErrorType;
}
