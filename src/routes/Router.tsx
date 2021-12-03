import { Route } from 'react-router-dom';
import { DemoPage } from '../pages';

const Router = () => {
  return <Route path="/demo" element={<DemoPage />} />;
};

export default Router;
