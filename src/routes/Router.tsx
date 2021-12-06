import { Route, Routes } from 'react-router-dom';
import { LogInPage } from '../pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<LogInPage />} />
    </Routes>
  );
};

export default Router;
