import { Navigate, Outlet } from 'react-router-dom';
import { useVerifyAndUpdateUser } from '@recoils/user/useVerifyAndUpdateUser';

const PrivateRoute = () => {
  const user = useVerifyAndUpdateUser({ isPrivateRoute: true });

  return user.nickname.length ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
