import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/atoms';
import { getPostDetailApi } from '../../utils/apis/post';

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const getPostDetail = async (postId: number) => {
    const { data, error } = await getPostDetailApi(postId);
    console.log(data, error);
  };
  useEffect(() => {
    postId && getPostDetail(parseInt(postId));
  }, []);
  return (
    <div>
      <Header leftComp="backBtn" handleLeftEvent={() => navigate(-1)} midText="사진 보기" />
    </div>
  );
};

export default PostDetailPage;
