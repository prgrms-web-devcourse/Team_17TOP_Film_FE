import { useUserInfo } from '../contexts/UserProvider';
import { Navigate, Outlet } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  if (token) {
    const { refreshUserContext } = useUserInfo();
    useLayoutEffect(() => {
      token && refreshUserContext();
    }, []);
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
