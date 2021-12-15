import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserInfo } from '../contexts/UserProvider';

const PrivateRoute = () => {
  const { userInfo } = useUserInfo();
  const location = useLocation();

  if (!userInfo.nickname) {
    return <Navigate to="/login" state={{ from: location, needLogin: true }} />;
  }
  return <Outlet />;
};
export default PrivateRoute;
