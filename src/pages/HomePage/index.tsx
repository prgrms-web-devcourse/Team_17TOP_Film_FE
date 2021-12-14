import { useState, useEffect, useCallback } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { PreviewBottomSheet } from '../../components/organism';
import { Button, Modal } from '../../components/atoms';
import { HomePageHeader, PostCreateBtn, ModalWrapper, ButtonGroup, ModalText } from './style';
import Map from './Map';
import { Cookies } from 'react-cookie';
import { getPostListApi } from '../../utils/apis/post';
import { Post, PreviewPost } from '../../utils/apis/post/type';

const PreviewPosts = [
  {
    postId: 0,
    title: '제목입니당',
    previewText: '엿보기 문구입니당',
    availableAt: 'yyyy-MM-dd',
    state: 'Closed',
    location: {
      latitude: '37.491837217869616',
      longitude: '127.02959879978368',
    },
    authorityCount: 3,
    authorityImageList: [
      {
        imageOrder: 0,
        authorityId: 0,
        imageUrl: '',
      },
      {
        imageOrder: 0,
        authorityId: 0,
        imageUrl: '',
      },
    ],
  },
  {
    postId: 1,
    title: '제목입니당',
    previewText: '엿보기 문구입니당',
    availableAt: 'yyyy-MM-dd',
    state: 'Closed',
    location: {
      latitude: '37.48802955953209',
      longitude: '127.02570733476914',
    },
    authorityCount: 3,
    authorityImageList: [
      {
        imageOrder: 0,
        authorityId: 0,
        imageUrl: '',
      },
      {
        imageOrder: 0,
        authorityId: 0,
        imageUrl: '',
      },
    ],
  },
  {
    postId: 2,
    title: '제목입니당',
    previewText: '엿보기 문구입니당',
    availableAt: 'yyyy-MM-dd',
    state: 'Closed',
    location: {
      latitude: '37.48722960663839',
      longitude: '127.0299415713133',
    },
    authorityCount: 3,
    authorityImageList: [
      {
        imageOrder: 0,
        authorityId: 0,
        imageUrl: '',
      },
      {
        imageOrder: 0,
        authorityId: 0,
        imageUrl: '',
      },
    ],
  },
];

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
      setPostList((prev) => [...prev, ...data.posts]);
    }
  }, [getPostListApi]);

  const handleSelectedPost = (postid: number) => {
    // 엿보기 페이지 api 통신
    setselectedPost(PreviewPosts[postid]);
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
          <Route path=":id" element={<PreviewBottomSheet previewPost={selectedPost} />} />
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
