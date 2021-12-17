import React, { useCallback, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useUserInfo } from '../../contexts/UserProvider';
import { isUserSignUpApi } from '../../utils/apis/user';

const OauthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { saveAllUserInfo } = useUserInfo();

  const routingBasedOnSignUpStatus = useCallback(async () => {
    const { data } = await isUserSignUpApi();
    console.log(data);
    const { nickname, profileImageUrl } = data;
    if (data.isDuplicate) {
      saveAllUserInfo({ nickname, profileImageUrl });
      return navigate('/');
    }

    navigate('/signup');
  }, []);

  useLayoutEffect(() => {
    const { token } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    localStorage.setItem('token', JSON.stringify(token));
    routingBasedOnSignUpStatus();
  }, []);

  return <></>;
};

export default OauthPage;
