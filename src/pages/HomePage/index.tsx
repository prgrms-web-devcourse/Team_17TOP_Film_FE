import { useState } from 'react';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import PinImg from '../../assets/icons/icon_marker_open.svg';

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

const HomePage = () => {
  const [viewport, setViewport] = useState({
    latitude: 37,
    longitude: 127,
    zoom: 5,
    bearing: 0,
    pitch: 0,
  });

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
      {dummy.map((data, i) => (
        <Marker
          key={i}
          latitude={parseFloat(data.location[0].latitude)}
          longitude={parseFloat(data.location[0].longitude)}
        >
          <img src={PinImg} />
        </Marker>
      ))}
    </MapGL>
  );
};

export default HomePage;
