import { useLocation } from 'react-router';

const Test = () => {
  const navigation = useLocation();
  console.log(navigation);
  return <div>zxcv</div>;
};

export default Test;
