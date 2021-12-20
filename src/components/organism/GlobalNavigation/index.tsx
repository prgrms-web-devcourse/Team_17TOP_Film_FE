import { MdHome, MdCollections, MdPerson } from 'react-icons/md';
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
        <MdCollections size={24} /> 필름 맡기기
      </Elem>
      <Elem onClick={handleMyPageClick}>
        <MdPerson size={24} /> 마이
      </Elem>
    </CustomNavigation>
  );
};
export default GloBalNavigation;
