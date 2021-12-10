import React, { useEffect, useState } from 'react';
import { Text } from '../../components/atoms';
import { NextStepButton, MapHeaderText } from './style';
import Map from './Map';
import { Location } from './types';

interface Props {
  goNextStep(): void;
  location: Location | null;
  handleLocation(data: Location): void;
}

const FirstStep = ({ goNextStep, location, handleLocation }: Props) => {
  const [userLocation, setUserLocation] = useState({ latitude: 37, longitude: 127 });
  const [marker, setMarker] = useState({ latitude: 37, longitude: 126 });

  const getGeoLocation = () => {
    if (!navigator.geolocation) {
      console.warn('GPS를 지원하지 않습니다.');
      return;
    }
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  useEffect(() => {
    if (!location) {
      getGeoLocation();
      return;
    }
    setUserLocation({
      latitude: location.latitude,
      longitude: location.longitude,
    });
  }, []);

  const handleMarker = (data: Location) => {
    setMarker(data);
  };

  const saveLocation = () => {
    handleLocation(marker);
    goNextStep();
  };

  return (
    <>
      <MapHeaderText textType="Heading3">
        필름을 맡길
        <br />
        위치로 마커를 옮겨주세요
      </MapHeaderText>
      <Map
        latitude={userLocation.latitude}
        longitude={userLocation.longitude}
        marker={marker}
        onChangeMarker={handleMarker}
      />
      <NextStepButton buttonType="PrimaryBtn" onClick={saveLocation}>
        <Text textType="Paragraph1">여기에 만들래요</Text>
      </NextStepButton>
    </>
  );
};

export default FirstStep;
