import { Route, Routes } from 'react-router-dom';
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
