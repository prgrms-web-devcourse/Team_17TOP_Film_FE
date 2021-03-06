import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import { Pin } from '../../components/organism';
import { Post, PreviewPost } from '../../utils/apis/post/type';
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
    zoom: 15,
    bearing: 0,
    pitch: 0,
  });

  const handleSelectedMarker = useCallback((postId: number) => {
    onClick(postId);
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
        style={{ bottom: 56, right: 0, margin: 20 }}
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
