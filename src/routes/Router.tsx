import { Route, Routes } from 'react-router-dom';
import { LogInPage, HomePage, CreatePostPage } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="post/create" element={<CreatePostPage />} />
    </Routes>
  );
};

export default Router;
