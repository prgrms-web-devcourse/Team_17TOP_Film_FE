import { authInstance } from '../config/createInstance';
import { IsUserSignUpApi, SignUpApi } from './type';

const isUserSignUpApi = async () => authInstance.get<IsUserSignUpApi>('/api/v1/users/duplicate');

const signUpApi = async (nickname: string) =>
  authInstance.post<SignUpApi>('/api/v1/users/signup', {
    nickname,
  });

export { isUserSignUpApi, signUpApi };
