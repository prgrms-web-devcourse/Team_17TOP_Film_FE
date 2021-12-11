import { useState, useCallback, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
interface Props {
  location?: {
    latitude: string;
    longitude: string;
  };
  postList: Post[];
}
const Map = ({ location, postList }: Props) => {
  const [viewport, setViewport] = useState({
    latitude: 37,
    longitude: 127,
    zoom: 10,
    bearing: 0,
    pitch: 0,
  });
  const [selectedMarker, setselectedMarker] = useState<Post | null>(null);

  const handleSelectedMarker = useCallback((data: Post) => {
    setselectedMarker(data);
  }, []);

  const positionOptions = { enableHighAccuracy: true };

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    !id ? setselectedMarker(null) : '';
  }, [id]);

  useEffect(() => {
    if (location) {
      setViewport((prev) => ({
        ...prev,
        latitude: parseFloat(location.latitude),
        longitude: parseFloat(location.longitude),
      }));
    }
  }, []);

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
        auto
      />
      {postList.map((data, i) => (
        <Marker
          key={i}
          latitude={parseFloat(data.location.latitude)}
          longitude={parseFloat(data.location.longitude)}
          onClick={() => {
            handleSelectedMarker(data);
            navigate(`${data.postId}`);
          }}
        >
          <Pin
            selected={selectedMarker?.postId === data.postId ? true : false}
            state={data.state}
          ></Pin>
        </Marker>
      ))}
    </MapGL>
  );
};

export default Map;
