import { authInstance } from '../../config/createInstance';
import { CreatePostApi } from './type';

const createPostApi = async (formData: FormData) =>
  authInstance.post<CreatePostApi>('/api/v1/posts', formData);

export default createPostApi;
