import { useCallback, useEffect, useState } from 'react';
import MapGl, { Marker } from 'react-map-gl';
import Pin from './Pin';
import { Location } from './types';

interface Props {
  latitude: number;
  longitude: number;
  marker: Location;
  onChangeMarker(data: Location): void;
}

const Map = ({ latitude, longitude, marker, onChangeMarker }: Props) => {
  const [viewport, setViewport] = useState({
    latitude: 37,
    longitude: 126,
    zoom: 15,
  });

  useEffect(() => {
    setViewport({
      ...viewport,
      latitude,
      longitude,
    });

    onChangeMarker({
      latitude,
      longitude,
    });
  }, [latitude, longitude]);

  const onMarkerDragEnd = useCallback((event) => {
    onChangeMarker({
      latitude: event.lngLat[1],
      longitude: event.lngLat[0],
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
