import { Link } from 'react-router-dom';

const Test1 = () => {
  return (
    <Link to="/test" state={{ data: 1 }}>
      asdf
    </Link>
  );
};
export default Test1;
