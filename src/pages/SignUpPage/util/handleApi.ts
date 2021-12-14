import { signUpApi } from '../../../utils/apis/user';

const handleSignUpApiError = (errorCode: string) => {
  if (errorCode === 'U001') {
    return console.error('중복된 닉네임이 존재합니다.');
  }
  if (errorCode === 'U002') {
    return console.error('이미 계정이 존재합니다.');
  }
  if (errorCode === 'U003') {
    return console.error('닉네임 양식이 일치하지 않습니다.');
  }
  return console.error('예기치 못한 에러가 발생했습니다');
};

const useSignUpApi = async (nickname: string) => {
  const { data: userData, error } = await signUpApi(nickname);
  if (!userData) {
    const { errorCode } = error;
    return handleSignUpApiError(errorCode);
  }
  return userData;
};
export { useSignUpApi };
