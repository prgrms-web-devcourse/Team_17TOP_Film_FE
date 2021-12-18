import React, { useLayoutEffect } from 'react';
import { useUserInfo } from '../contexts/UserProvider';
import { Navigate, Outlet } from 'react-router-dom';

const NotLoginCanUseRoute = () => {
  const token = localStorage.getItem('token');
  const { refreshUserContext } = useUserInfo();
  useLayoutEffect(() => {
    token && refreshUserContext();
  }, []);

  return !token ? <Outlet /> : <Navigate to="/" />;
};
export default NotLoginCanUseRoute;
