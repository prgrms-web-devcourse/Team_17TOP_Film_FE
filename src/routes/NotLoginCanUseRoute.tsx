import React from 'react';
import { useUserInfo } from '../contexts/UserProvider';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const {
    userInfo: { nickname },
  } = useUserInfo();

  if (nickname.length > 0) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
