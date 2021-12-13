import { Route, Routes } from 'react-router-dom';
import { LogInPage, HomePage, OauthPage, CreatePostPage, SignUpPage } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/oauth/redirect/*" element={<OauthPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/post/create" element={<CreatePostPage />} />
    </Routes>
  );
};

export default Router;
