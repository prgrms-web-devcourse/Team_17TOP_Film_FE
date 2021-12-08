import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import MapGl, { Marker } from 'react-map-gl';
import Pin from './Pin';

interface Props {
  latitude: number;
  longitude: number;
  onChangeLocation: Dispatch<
    SetStateAction<{
      latitude: number;
      longitude: number;
    }>
  >;
}

const Map = ({ latitude, longitude, onChangeLocation }: Props) => {
  const [viewport, setViewport] = useState({
    latitude: 37,
    longitude: 126,
    zoom: 15,
  });
  const [marker, setMarker] = useState({ latitude: 37, longitude: 126 });

  useEffect(() => {
    setViewport({
      ...viewport,
      latitude,
      longitude,
    });

    setMarker({
      latitude,
      longitude,
    });
  }, [latitude, longitude]);

  const onMarkerDragEnd = useCallback((event) => {
    setMarker({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
    onChangeLocation({
      longitude: event.lngLat[0],
      latitude: event.lngLat[1],
    });
  }, []);
  return (
    <MapGl
      {...viewport}
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/light-v10"
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker
        latitude={marker.latitude}
        longitude={marker.longitude}
        draggable
        onDragEnd={onMarkerDragEnd}
      >
        <Pin size={30}></Pin>
      </Marker>
    </MapGl>
  );
};

export default Map;
