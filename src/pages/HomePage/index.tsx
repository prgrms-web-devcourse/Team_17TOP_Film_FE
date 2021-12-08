import { useState } from 'react';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import { Pin } from '../../components/organism';

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

  const handleSelectedMarker = (data: Post) => {
    setselectedMarker(data);
  };

  const positionOptions = { enableHighAccuracy: true };
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
      {dummy.map((data, i) => {
        return (
          <Marker
            key={i}
            latitude={parseFloat(data.location[0].latitude)}
            longitude={parseFloat(data.location[0].longitude)}
            onClick={() => {
              handleSelectedMarker(data);
              console.log(`data`, data);
            }}
          >
            <Pin
              selected={selectedMarker?.postId === data.postId ? true : false}
              state={data.state}
            ></Pin>
          </Marker>
        );
      })}
    </MapGL>
  );
};

export default HomePage;
