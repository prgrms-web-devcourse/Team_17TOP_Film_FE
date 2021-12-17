import React, { useEffect, useLayoutEffect } from 'react';
import { useUserInfo } from '../contexts/UserProvider';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const token = localStorage.getItem('token');
  const { refreshUserContext } = useUserInfo();
  useLayoutEffect(() => {
    refreshUserContext();
  }, []);

  return !token ? <Outlet /> : <Navigate to="/" />;
};
export default PrivateRoute;
