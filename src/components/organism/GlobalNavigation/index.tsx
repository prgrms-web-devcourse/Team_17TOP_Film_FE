import { MdHome } from 'react-icons/md';
import { BsFillCameraFill } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';
import { CustomNavigation, Elem } from './style';
import { useNavigate } from 'react-router-dom';

const GloBalNavigation = () => {
  const navigate = useNavigate();
  const handleMyPageClick = () => {
    navigate('/mypage');
  };
  const handleHomeClick = () => {
    navigate('/');
  };
  const handleCreateFilmClick = () => {
    navigate('/post/create');
  };
  return (
    <CustomNavigation>
      <Elem onClick={handleHomeClick}>
        <MdHome size={24} />홈
      </Elem>
      <Elem onClick={handleCreateFilmClick}>
        <BsFillCameraFill size={24} /> 필름 맡기기
      </Elem>
      <Elem onClick={handleMyPageClick}>
        <FaUserCircle size={24} /> 마이페이지
      </Elem>
    </CustomNavigation>
  );
};
export default GloBalNavigation;
