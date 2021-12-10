import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';

const OauthPage = () => {
  const test = useLocation();
  const navigate = useNavigate();

  const { token } = qs.parse(test.search, {
    ignoreQueryPrefix: true,
  });

  localStorage.setItem('token', JSON.stringify(token));

  useEffect(() => {
    navigate('/signup');
  }, []);
  return <></>;
};

export default OauthPage;
