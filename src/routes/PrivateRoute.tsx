import { useUserInfo } from '../contexts/UserProvider';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const PrivateRoute = () => {
  const navigate = useNavigate;
  const { userInfo } = useUserInfo();

  if (userInfo.nickname.length < 1) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default PrivateRoute;
