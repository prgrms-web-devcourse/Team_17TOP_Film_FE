import React, { useEffect, useState } from 'react';
import { NextStepButton, MapHeaderText, NextStepText } from '../../style';
import Map from './Map';
import { FirstStepProps, Location } from '../../types';
import UploadHeader from '../UploadHeader';
import { useNavigate } from 'react-router-dom';
import Toast from '../../../../components/organism/Toast';
import Loader from '../../../../components/organism/Loader';

const FirstStep = ({ goNextStep, location, handleLocation }: FirstStepProps) => {
  const [userLocation, setUserLocation] = useState(location || null);
  const [marker, setMarker] = useState({ latitude: 37, longitude: 126 });
  const navigate = useNavigate();

  const getGeoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => Toast.warn('GPS를 지원하지 않습니다.'),
    );
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
      {!userLocation ? <Loader>필름 맡기러 가는중...</Loader> : ''}
      <UploadHeader handleBackBtn={() => navigate(-1)}></UploadHeader>
      <MapHeaderText textType="Heading3">
        필름을 맡길
        <br />
        위치를 선택 해주세요
      </MapHeaderText>
      {userLocation ? (
        <Map
          latitude={userLocation.latitude}
          longitude={userLocation.longitude}
          marker={marker}
          onChangeMarker={handleMarker}
        />
      ) : (
        ''
      )}
      <NextStepButton buttonType="PrimaryBtn" onClick={saveLocation}>
        <NextStepText textType="Paragraph1">여기에 만들래요</NextStepText>
      </NextStepButton>
    </>
  );
};

export default FirstStep;
