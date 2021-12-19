import { authInstance } from '../config/createInstance';
import { ChangeAuthorApi, ChangeAuthorApiProps } from './type';

const changeAuthorApi = async ({ authorList, postId }: ChangeAuthorApiProps) => {
  return authInstance.patch<ChangeAuthorApi>(`/api/v1/posts/authority/${postId}`, authorList);
};

export { changeAuthorApi };
