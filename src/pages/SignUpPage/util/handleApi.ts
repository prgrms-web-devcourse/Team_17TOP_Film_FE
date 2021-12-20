import Toast from '../../../components/organism/Toast';
import {
  USER_ACCOUNT_EXIST,
  USER_NICKNAME_EXIST,
  USER_NICKNAME_INVALID,
  USER_SIGNUP_SUCCESS,
  UNEXPECTED_ERROR,
} from '../../../utils/apis/config/constants';
import { signUpApi } from '../../../utils/apis/user';

const handleSignUpApiError = (errorCode: string) => {
  if (errorCode === 'U001') {
    return Toast.warn(USER_NICKNAME_EXIST);
  }
  if (errorCode === 'U002') {
    return Toast.warn(USER_ACCOUNT_EXIST);
  }
  if (errorCode === 'U003') {
    return Toast.warn(USER_NICKNAME_INVALID);
  }
  return Toast.warn(UNEXPECTED_ERROR);
};

const useSignUpApi = async (nickname: string) => {
  const { data: userData, error } = await signUpApi(nickname);
  if (!userData) {
    const { errorCode } = error;
    return handleSignUpApiError(errorCode);
  }
  Toast.info(USER_SIGNUP_SUCCESS);
  return userData;
};
export { useSignUpApi };
