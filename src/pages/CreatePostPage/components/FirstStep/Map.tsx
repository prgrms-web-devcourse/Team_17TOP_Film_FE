import { useCallback, useEffect, useRef, useState } from 'react';
import MapGl, { MapEvent, MapRef, Marker } from 'react-map-gl';
import { MAP_STYLE } from '../../../../utils/constants/mapConstants';
import Pin from './Pin';
import { Location } from '../../types';

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
  const mapRef = useRef<any>();

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

  const handleOnClickMap = (e: MapEvent) => {
    onChangeMarker({
      latitude: e.lngLat[1],
      longitude: e.lngLat[0],
    });
  };
  return (
    <MapGl
      ref={mapRef}
      onClick={handleOnClickMap}
      {...viewport}
      width="100%"
      height="100%"
      mapStyle={MAP_STYLE}
      onViewportChange={setViewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Marker
        latitude={marker.latitude}
        longitude={marker.longitude}
        draggable
        onDragEnd={onMarkerDragEnd}
        offsetTop={-60}
        offsetLeft={-20}
      >
        <Pin size={60}></Pin>
      </Marker>
    </MapGl>
  );
};

export default Map;
