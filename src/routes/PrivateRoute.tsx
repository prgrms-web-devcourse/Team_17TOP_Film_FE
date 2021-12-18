import { useUserInfo } from '../contexts/UserProvider';
import { Navigate, Outlet } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Toast from '../components/organism/Toast';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  const { refreshUserContext } = useUserInfo();
  if (!token) {
    Toast.info('로그인이 만료되었습니다.');
    console.log('로그인이 만료되었습니다.');
  }
  useLayoutEffect(() => {
    token && refreshUserContext();
  }, []);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
