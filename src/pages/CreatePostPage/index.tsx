import { useEffect, useState } from 'react';
import Map from './Map';
import { CreatePostPageContainer, FirstStepButton, MapHeaderText } from './style';
import { Text } from '../../components/atoms';

const CreatePostPage = () => {
  const [userLocation, setUserLocation] = useState({ latitude: 37, longitude: 127 });
  const [selectedLocation, setSelectedLocation] = useState({ latitude: 37, longitude: 127 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      console.warn('GPS를 지원하지 않습니다.');
    }
  }, []);

  useEffect(() => {
    console.log('마커 위치 정보');
    console.log(selectedLocation);
  }, [selectedLocation]);

  return (
    <CreatePostPageContainer>
      <MapHeaderText textType="Heading3">
        필름을 맡길
        <br />
        위치로 마커를 옮겨주세요
      </MapHeaderText>
      <Map
        latitude={userLocation.latitude}
        longitude={userLocation.longitude}
        onChangeLocation={setSelectedLocation}
      />
      <FirstStepButton buttonType="PrimaryBtn">
        <Text textType="Paragraph1">여기에 만들래요</Text>
      </FirstStepButton>
    </CreatePostPageContainer>
  );
};

export default CreatePostPage;
