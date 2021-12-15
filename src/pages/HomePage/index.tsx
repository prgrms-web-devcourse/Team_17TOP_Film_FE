import { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { PreviewBottomSheet } from '../../components/organism';
import { Button, Modal } from '../../components/atoms';
import { HomePageHeader, PostCreateBtn, ModalWrapper, ButtonGroup, ModalText } from './style';
import Map from './Map';
import { Cookies } from 'react-cookie';
import { getPostListApi, getPreviewPostApi, deletePostApi } from '../../utils/apis/post';
import { Post, PreviewPost } from '../../utils/apis/post/type';

const HomePage = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [isMap, setIsMap] = useState(false);
  const [postList, setPostList] = useState<Post[]>([]);
  const [selectedPost, setselectedPost] = useState<PreviewPost | null>(null);
  const [openablePosts, setOpenablePosts] = useState<Post[] | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

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

  const handleOpenablePostsModal = () => {
    cookies.set('invisibleModal', true, { maxAge: 3600 });
  };
  const handleViewLater = () => {
    setModalVisible(false);
    handleOpenablePostsModal();
    setIsMap(true);
  };

  const handleViewNow = () => {
    navigate(`${openablePosts && openablePosts[0].postId}`);
    setModalVisible(false);
    setIsMap(true);
  };
  const handleLogout = () => {
    // 로그아웃 api
    console.log('로그아웃');
  };

  useEffect(() => {
    getPostList();
    console.log('getPost');

    if (cookies.get('invisibleModal')) {
      setIsMap(true);
      return;
    }
    const currentOpenablePosts = postList.filter((post) => post.state === 'Openable');
    if (currentOpenablePosts.length) {
      setOpenablePosts(currentOpenablePosts);
      setModalVisible(true);
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
              <PreviewBottomSheet previewPost={selectedPost} postDeleteMethod={handleDeletePost} />
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
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <ModalWrapper>
          <ModalText textType="Heading4">
            오늘 찾을 수 있는 사진이 {openablePosts?.length}개 있어요!
          </ModalText>
          <ButtonGroup>
            <Button buttonType="SecondaryBtn" width={'100%'} onClick={handleViewLater}>
              나중에 볼래요
            </Button>
            <Button buttonType="PrimaryBtn" width={'100%'} onClick={handleViewNow}>
              보러갈래요!
            </Button>
          </ButtonGroup>
        </ModalWrapper>
      </Modal>
    </div>
  );
};

export default HomePage;
