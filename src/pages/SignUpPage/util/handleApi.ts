import Toast from '../../../components/organism/Toast';
import { signUpApi } from '../../../utils/apis/user';

const handleSignUpApiError = (errorCode: string) => {
  if (errorCode === 'U001') {
    return Toast.warn('중복된 닉네임이 존재합니다.');
  }
  if (errorCode === 'U002') {
    return Toast.warn('이미 계정이 존재합니다.');
  }
  if (errorCode === 'U003') {
    return Toast.warn('닉네임 양식이 일치하지 않습니다.');
  }
  return Toast.warn('예기치 못한 에러가 발생했습니다');
};

const useSignUpApi = async (nickname: string) => {
  const { data: userData, error } = await signUpApi(nickname);
  if (!userData) {
    const { errorCode } = error;
    return handleSignUpApiError(errorCode);
  }
  Toast.info('회원가입에 성공했습니다!');
  return userData;
};
export { useSignUpApi };
