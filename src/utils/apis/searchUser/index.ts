import { authInstance } from '../config/createInstance';
import { GetSearchUserApi, GetSearchUserProps } from './type';

const getSearchUser = async ({ keyword, lastNickname, size }: GetSearchUserProps) => {
  return authInstance.get<GetSearchUserApi>(
    `/api/v1/users?keyword=${keyword}&lastNickname=${lastNickname}&size=${size}`,
  );
};

export { getSearchUser };
