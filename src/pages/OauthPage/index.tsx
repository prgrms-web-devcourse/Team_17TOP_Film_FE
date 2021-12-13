import React, { useCallback, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { isUserSignUpApi } from '../../utils/apis/user';

const OauthPage = () => {
  const test = useLocation();
  const navigate = useNavigate();
  const routingBasedOnSignUpStatus = useCallback(async (token: string) => {
    const isSignUp = await isUserSignUpApi(token as string);

    if (isSignUp) {
      return navigate('/');
    }
    navigate('/signup');
  }, []);

  useLayoutEffect(() => {
    const { token } = qs.parse(test.search, {
      ignoreQueryPrefix: true,
    });
    localStorage.setItem('token', JSON.stringify(token));
    routingBasedOnSignUpStatus(token as string);
  }, []);
  return <></>;
};

export default OauthPage;
