import { Route, Routes } from 'react-router-dom';
import { CreatePostPage, LogInPage, HomePage } from '../pages';
import { PreviewBottomSheet } from '../components/organism';

const Router = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />}>
        <Route path=":id" element={<PreviewBottomSheet />} />
      </Route>
      <Route path="login" element={<LogInPage />} />
      <Route path="post/create" element={<CreatePostPage />} />
    </Routes>
  );
};

export default Router;
