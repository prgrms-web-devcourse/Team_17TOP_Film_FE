import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/atoms';

const PostDetailPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header leftComp="backBtn" handleLeftEvent={() => navigate(-1)} midText="사진 보기" />
    </div>
  );
};

export default PostDetailPage;
