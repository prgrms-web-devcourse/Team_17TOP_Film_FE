import { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { PreviewBottomSheet } from '../../components/organism';
import { HomePageHeader, PostCreateBtn } from './style';
import Map from './Map';
import { Cookies } from 'react-cookie';
import { getPostListApi, getPreviewPostApi, deletePostApi } from '../../utils/apis/post';
import { Post, PreviewPost } from '../../utils/apis/post/type';
import ConfirmModal from './Modal';

const HomePage = () => {
  const cookies = new Cookies();

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isMap, setIsMap] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);
  const [selectedPost, setselectedPost] = useState<PreviewPost | null>(null);
  const [openablePosts, setOpenablePosts] = useState<Post[] | null>(null);

  const [todayPostViewModalVisible, setTodayPostViewModalVisible] = useState(false);
  const [postDeleteModalVisible, setPostDeleteModalVisible] = useState(false);

  const getPostList = useCallback(async () => {
    const { data, error } = await getPostListApi();
    if (data) {
      setPostList(data.posts);
    }
  }, [getPostListApi]);

  const handleSelectedPost = useCallback(
    async (postId: number) => {
      const { data, error } = await getPreviewPostApi(postId);
      setselectedPost(data);
    },
    [getPreviewPostApi],
  );

  const handleDeletePost = async (postId: number) => {
    const { data, error } = await deletePostApi(postId);
    if (!data) {
      console.log(error);
      return;
    }
    navigate(`/`);
    getPostList();
  };

  const handleViewLater = () => {
    setTodayPostViewModalVisible(false);
    cookies.set('invisibleModal', true, { maxAge: 3600 });
    setIsMap(true);
  };

  const handleViewNow = () => {
    setTodayPostViewModalVisible(false);
    navigate(`${openablePosts && openablePosts[0].postId}`);
    setIsMap(true);
  };
  const handleLogout = () => {
    // 로그아웃 api
    console.log('로그아웃');
  };

  useEffect(() => {
    getPostList();

    if (cookies.get('invisibleModal')) {
      setIsMap(true);
      return;
    }
    const currentOpenablePosts = postList.filter((post) => post.state === 'Openable');

    if (currentOpenablePosts.length) {
      setOpenablePosts(currentOpenablePosts);
      setTodayPostViewModalVisible(true);
    } else {
      setIsMap(true);
    }
  }, []);

  useEffect(() => {
    pathname.slice(1) ? handleSelectedPost(parseInt(pathname.slice(1))) : setselectedPost(null);
  }, [pathname]);

  return (
    <div>
      <HomePageHeader rightComp="lock" handleRightEvent={handleLogout} midText="내 필름" />
      {isMap && (
        <Map
          currentLocation={!pathname.slice(1) ? true : false}
          selectedPost={selectedPost}
          postList={postList}
          onClick={handleSelectedPost}
        />
      )}

      {selectedPost && (
        <Routes>
          <Route
            path=":id"
            element={
              <PreviewBottomSheet
                previewPost={selectedPost}
                postViewEvent={() => navigate(`/post/${selectedPost.postId}`)}
                postDeleteEvent={() => setPostDeleteModalVisible(true)}
              />
            }
          />
        </Routes>
      )}
      <PostCreateBtn
        buttonType="PrimaryBtn"
        width={'100%'}
        onClick={() => navigate(`/post/create`)}
      >
        필름 맡기기
      </PostCreateBtn>
      <ConfirmModal
        modalVisible={todayPostViewModalVisible}
        modalText={`오늘 찾을 수 있는 사진이 ${openablePosts?.length}개 있어요!`}
        primaryBtnText={`보러갈래요!`}
        secondaryBtnText={`나중에 볼래요`}
        handleClose={() => setTodayPostViewModalVisible(false)}
        primaryBtnEvent={handleViewNow}
        secondaryBtnEvent={handleViewLater}
      />
      {selectedPost && (
        <ConfirmModal
          modalVisible={postDeleteModalVisible}
          modalText={`정말 필름을 삭제하시겠어요?`}
          primaryBtnText={`네..ㅜㅜ`}
          secondaryBtnText={`잠시만요!`}
          handleClose={() => setPostDeleteModalVisible(false)}
          primaryBtnEvent={() => handleDeletePost(selectedPost?.postId)}
          secondaryBtnEvent={() => setPostDeleteModalVisible(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
