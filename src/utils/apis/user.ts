import { authInstance } from './config/createInstance';

const isUserSignUpApi = async () => {
  try {
    return authInstance.get('/api/v1/users/duplicate');
  } catch (error) {
    console.error(error);
  }
};

const signUpApi = async (nickname: string) => {
  try {
    return authInstance.post('/api/v1/users/signup', { nickname });
  } catch ({ response }) {
    console.error(response);
  }
};
export { isUserSignUpApi, signUpApi };
