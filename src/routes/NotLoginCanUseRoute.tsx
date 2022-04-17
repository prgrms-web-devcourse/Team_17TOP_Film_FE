import { useVerifyAndUpdateUser } from '@/recoil/user/useVerifyAndUpdateUser';
import { Navigate, Outlet } from 'react-router-dom';

const NotLoginCanUseRoute = () => {
  const user = useVerifyAndUpdateUser({ isPrivateRoute: false });

  return !user.nickname.length ? <Outlet /> : <Navigate to="/" />;
};
export default NotLoginCanUseRoute;
