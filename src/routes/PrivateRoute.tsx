import { useVerifyAndUpdateUser } from '@/recoil/user/useVerifyAndUpdateUser';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const user = useVerifyAndUpdateUser({ isPrivateRoute: true });

  return user.nickname.length ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
