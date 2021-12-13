import React, { useCallback, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { isUserSignUpApi } from '../../utils/apis/user';

const OauthPage = () => {
  const test = useLocation();
  const navigate = useNavigate();
  const routingBasedOnSignUpStatus = useCallback(async () => {
    const {
      data: isSignUp,
      error: { message },
    } = await isUserSignUpApi();
    if (message) {
      console.warn(message);
    }

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
    routingBasedOnSignUpStatus();
  }, []);
  return <></>;
};

export default OauthPage;
