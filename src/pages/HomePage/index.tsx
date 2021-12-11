import { useState, useEffect, useCallback } from 'react';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import { Pin, PreviewBottomSheet } from '../../components/organism';

const dummy = [
  {
    postId: 0,
    state: 'Closed',
    location: [
      {
        latitude: '37.491837217869616',
        longitude: '127.02959879978368',
      },
    ],
  },
  {
    postId: 1,
    state: 'Opend',
    location: [
      {
        latitude: '37.48802955953209',
        longitude: '127.02570733476914',
      },
    ],
  },
  {
    postId: 2,
    state: 'Openable',
    location: [
      {
        latitude: '37.48722960663839',
        longitude: '127.0299415713133',
      },
    ],
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
interface Location {
  latitude: string;
  longitude: string;
}

interface Post {
  postId: number;
  state: string;
  location: Location[];
}

const HomePage = () => {
  const [viewport, setViewport] = useState({
    latitude: 37,
    longitude: 127,
    zoom: 5,
    bearing: 0,
    pitch: 0,
  });
  const [selectedMarker, setselectedMarker] = useState<Post | null>(null);
  const { id } = useParams();
  const handleSelectedMarker = useCallback((data: Post) => {
    setselectedMarker(data);
  }, []);

  const positionOptions = { enableHighAccuracy: true };

  useEffect(() => {
    !id ? setselectedMarker(null) : '';
  }, [id]);

  return (
    <div>
      <MapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/light-v10"
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <GeolocateControl
          style={{ top: 0, left: 0, margin: 10 }}
          positionOptions={positionOptions}
          trackUserLocation
          auto
        />
        {dummy.map((data, i) => (
          <Marker
            key={i}
            latitude={parseFloat(data.location[0].latitude)}
            longitude={parseFloat(data.location[0].longitude)}
            onClick={() => {
              handleSelectedMarker(data);
            }}
          >
            <Link to={`${data.postId}`}>
              <Pin
                selected={selectedMarker?.postId === data.postId ? true : false}
                state={data.state}
              ></Pin>
            </Link>
          </Marker>
        ))}
      </MapGL>
      <Routes>
        <Route path=":id" element={<PreviewBottomSheet previewPost={dummyPost} />} />
      </Routes>
    </div>
  );
};

export default HomePage;
