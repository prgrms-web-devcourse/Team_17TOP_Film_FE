import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { CreatePostPage, LogInPage, HomePage } from '../pages';
import Test from '../Test';
import Test1 from '../Test1';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Test1 />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default Router;
