import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PreviewBottomSheet } from '../../components/organism';

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

const HomePage = () => {
  const { pathname } = useLocation();
  const [selectedPost, setselectedPost] = useState<PreviewPost | null>(null);

  const handleSelectedPost = (postid: number) => {
    // 엿보기 페이지 api 통신
    setselectedPost(PreviewPosts[postid]);
  };

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
    </div>
  );
};

export default HomePage;
