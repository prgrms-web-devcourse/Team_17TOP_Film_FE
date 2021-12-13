import { authInstance } from './config/createInstance';
import { ErrorType } from './config/type';

const isUserSignUpApi = async () =>
  authInstance.get<{ data: boolean; error: ErrorType }>('/api/v1/users/duplicate');

const signUpApi = async (nickname: string) => {
  try {
    return authInstance.post('/api/v1/users/signup', { nickname });
  } catch ({ response }) {
    console.error(response);
  }
};
export { isUserSignUpApi, signUpApi };
