import { Route, Routes } from 'react-router-dom';
import { LogInPage, HomePage, OauthPage, CreatePostPage, SignUpPage } from '../pages';
import PrivateRoute from './PrivateRoute';

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
      <Route path="/oauth/redirect/*" element={<OauthPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route element={<PrivateRoute />}>
        <Route path="/*" element={<HomePage />} />
        <Route path="/post/create" element={<CreatePostPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
