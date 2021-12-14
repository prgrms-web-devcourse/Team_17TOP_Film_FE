import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useUserInfo } from '../contexts/UserProvider';

const PrivateRoute = () => {
  const { userInfo } = useUserInfo();
  const location = useLocation();

  if (!userInfo.nickname) {
    // Todo
    // 정보가 없어 로그인이 필요합니다 알려주기
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return <Outlet />;
};
export default PrivateRoute;
