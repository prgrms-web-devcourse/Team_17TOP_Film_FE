import React, { useCallback, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { isUserSignUpApi } from '../../utils/apis/user';

const OauthPage = () => {
  const test = useLocation();
  const navigate = useNavigate();
  const routingBasedOnSignUpStatus = useCallback(async () => {
    const {
      data: { isDuplicate },
    } = await isUserSignUpApi();

    if (isDuplicate) {
      console.log(isDuplicate);
      return navigate('/');
    }
    console.log(isDuplicate);
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
