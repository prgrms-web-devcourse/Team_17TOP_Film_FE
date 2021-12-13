import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import { Pin } from '../../components/organism';
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
interface Props {
  currentLocation: boolean;
  selectedPost: PreviewPost | null;
  postList: Post[];
  onClick: (id: number) => void;
}
const Map = ({ currentLocation, selectedPost, postList, onClick }: Props) => {
  const positionOptions = { enableHighAccuracy: true };
  const navigate = useNavigate();

  const [locationControl, setLocationControl] = useState(false);
  const [viewport, setViewport] = useState({
    latitude: 37,
    longitude: 127,
    zoom: 10,
    bearing: 0,
    pitch: 0,
  });

  const handleSelectedMarker = useCallback((id: number) => {
    // 상위 컴포넌트에 선택된 포스트 id 알려주기
    onClick(id);
  }, []);

  // 현재위치 기반으로 지도를 띄워야 하는 경우
  useEffect(() => {
    if (currentLocation) {
      setLocationControl(true);
    }
  }, []);

  useEffect(() => {
    if (selectedPost) {
      setViewport((prev) => ({
        ...prev,
        latitude: parseFloat(selectedPost.location.latitude),
        longitude: parseFloat(selectedPost.location.longitude),
      }));
    }
  }, [selectedPost]);

  return (
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
        auto={locationControl}
      />
      {postList.map((data, i) => (
        <Marker
          key={i}
          latitude={parseFloat(data.location.latitude)}
          longitude={parseFloat(data.location.longitude)}
          onClick={() => {
            handleSelectedMarker(data.postId);
            navigate(`${data.postId}`);
          }}
        >
          <Pin
            selected={selectedPost?.postId === data.postId ? true : false}
            state={data.state}
          ></Pin>
        </Marker>
      ))}
    </MapGL>
  );
};

export default Map;
