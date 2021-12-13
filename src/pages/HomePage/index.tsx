import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PreviewBottomSheet } from '../../components/organism';
import { Button, Modal } from '../../components/atoms';
import { ModalWrapper, ButtonGroup, ModalText } from './style';
import Map from './Map';

const dummy = [
  {
    postId: 0,
    state: 'Closed',
    location: {
      latitude: '37.491837217869616',
      longitude: '127.02959879978368',
    },
  },
  {
    postId: 1,
    state: 'Opend',
    location: {
      latitude: '37.48802955953209',
      longitude: '127.02570733476914',
    },
  },
  {
    postId: 2,
    state: 'Openable',
    location: {
      latitude: '37.48722960663839',
      longitude: '127.0299415713133',
    },
  },
];
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

interface Post {
  postId: number;
  state: string;
  location: {
    latitude: string;
    longitude: string;
  };
}
interface PreviewPost {
  postId: number;
  title: string;
  previewText: string;
  availableAt: string;
  state: string;
  location: {
    latitude: string;
    longitude: string;
  };
  authorityCount: number;
  authorityImageList: {
    imageOrder: number;
    authorityId: number;
    imageUrl: string;
  }[];
}

// TODO
// 마운트 될 때, 유저의 post를 받아와서 현재 열 수 있는 포스트가 있는지 체크(Openable)하고 있으면, 모달 띄우기
// 보러가기 클릭 시 엿보기 route 처리, Map에 해당 포스트 넘기기
// 모달에서 다음에 보기 클릭 시 Map에 위치 props 넘기지 않기, localstorage에 저장(하루동안 모달 다시 보여주지 않기)

const HomePage = () => {
  const { pathname } = useLocation();
  const [selectedPost, setselectedPost] = useState<PreviewPost | null>(null);
  const [openablePost, setOpenablePost] = useState<Post[] | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelectedPost = (postid: number) => {
    // 엿보기 페이지 api 통신
    setselectedPost(PreviewPosts[postid]);
  };

  useEffect(() => {
    // Map 리스트 api 통신
    // list 받으면 find로 Openable 체크
    const currentOpenablePost = dummy.filter((post) => post.state === 'Openable');
    setOpenablePost(currentOpenablePost);
    currentOpenablePost ? setModalVisible(true) : '';
  }, []);
  useEffect(() => {
    pathname.slice(1) ? handleSelectedPost(parseInt(pathname.slice(1))) : setselectedPost(null);
  }, [pathname]);

  return (
    <div>
      <Map
        currentLocation={!pathname.slice(1) ? true : false}
        selectedPost={selectedPost}
        postList={dummy}
        onClick={handleSelectedPost}
      />
      {selectedPost ? (
        <Routes>
          <Route path=":id" element={<PreviewBottomSheet previewPost={selectedPost} />} />
        </Routes>
      ) : (
        ''
      )}
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
        <ModalWrapper>
          <ModalText textType="Heading4">
            오늘 찾을 수 있는 사진이 {openablePost?.length}개 있어요!
          </ModalText>
          <ButtonGroup>
            <Button buttonType="SecondaryBtn" width={'100%'} onClick={() => setModalVisible(false)}>
              나중에 볼래요
            </Button>
            <Button buttonType="PrimaryBtn" width={'100%'} onClick={() => setModalVisible(false)}>
              보러갈래요!
            </Button>
          </ButtonGroup>
        </ModalWrapper>
      </Modal>
    </div>
  );
};

export default HomePage;
