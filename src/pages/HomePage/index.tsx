import { Route, Routes } from 'react-router-dom';
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
const dummyPost = {
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
};

const HomePage = () => {
  return (
    <div>
      <Map location={dummyPost.location} postList={dummy} />
      <Routes>
        <Route path=":id" element={<PreviewBottomSheet previewPost={dummyPost} />} />
      </Routes>
    </div>
  );
};

export default HomePage;
