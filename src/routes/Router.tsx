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
const Router = () => {
  return (
    <Routes>
      <Route element={<NotLoginCanUseRoute />}>
        <Route path="/login" element={<LogInPage />} />
        <Route path="/oauth/redirect/*" element={<OauthPage />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/post/create" element={<CreatePostPage />} />
        <Route path="/post/:postId" element={<PostDetailPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
