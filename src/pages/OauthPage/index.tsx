import React, { useLayoutEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { isUserSignUpApi } from '../../utils/apis/user';
import { useSetRecoilState } from 'recoil';
import { userState } from '@recoils/user';
import { setUserToken } from '@recoils/user/util/setUserToken';

const OauthPage = () => {
  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userState);
  const [params] = useSearchParams();

  const token = params.get('token');

  const checkExistUser = async () => {
    const {
      data: { isDuplicate, nickname, profileImageUrl },
    } = await isUserSignUpApi();

    if (isDuplicate) {
      setUserInfo({ nickname, profileImageUrl });
      return navigate('/');
    }
    navigate('/signup');
  };

  useLayoutEffect(() => {
    if (!token) return navigate('/login');
    setUserToken(token);
    checkExistUser();
  }, []);
  return <></>;
};
export default OauthPage;
