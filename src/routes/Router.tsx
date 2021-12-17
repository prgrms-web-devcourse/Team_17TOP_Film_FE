import { Route, Routes } from 'react-router-dom';
import {
  LogInPage,
  HomePage,
  OauthPage,
  CreatePostPage,
  SignUpPage,
  PostDetailPage,
} from '../pages';
import PrivateRoute from './PrivateRoute';
import NotLoginCanUseRoute from './NotLoginCanUseRoute';
import { useUserInfo } from '../contexts/UserProvider';
const Router = () => {
  const { userInfo } = useUserInfo();
  return (
    <Routes>
      <Route element={<NotLoginCanUseRoute />}></Route>

      <Route element={<PrivateRoute />}></Route>
      <Route path="/oauth/redirect/*" element={<OauthPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/*" element={<HomePage />} />
      <Route path="/post/create" element={<CreatePostPage />} />
      <Route path="/post/:postId" element={<PostDetailPage />} />
    </Routes>
  );
};

export default Router;
