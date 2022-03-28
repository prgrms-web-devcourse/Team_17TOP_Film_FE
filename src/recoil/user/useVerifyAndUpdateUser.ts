import { userState } from '@/recoil/user';
import Toast from '@refactors/atoms/Toast';
import { isUserSignUpApi } from '@utils/apis/user';
import { useLayoutEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getUserToken } from '../../routes/routesUtil/getUserToken';
import { removeUserToken } from '../../routes/routesUtil/removeUserToken';

const isValidToken = async () => {
  const { data } = await isUserSignUpApi();
  if (!data) {
    removeUserToken();
    return null;
  }
  return data;
};

const isValidUser = async () => {
  const token = getUserToken();
  if (!token) return false;
  const userData = await isValidToken();
  if (!userData) return false;
  return userData;
};

export const useVerifyAndUpdateUser = ({ isPrivateRoute }: { isPrivateRoute: boolean }) => {
  const [user, setUser] = useRecoilState(userState);

  const updateUser = async () => {
    const userData = await isValidUser();
    if (!userData) {
      isPrivateRoute && Toast.info({ msg1: '로그인이 필요합니다' });
      setUser({
        nickname: '',
        profileImageUrl: '',
      });
      return;
    }
    setUser({
      nickname: userData.nickname,
      profileImageUrl: userData.profileImageUrl,
    });
  };

  useLayoutEffect(() => {
    updateUser();
  }, []);
  return user;
};
