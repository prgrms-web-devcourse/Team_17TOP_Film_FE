import { useState } from 'react';
import { CreatePostPageContainer } from './style';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import { SecondStepData, Location } from './types';
import ThirdStep from './components/ThirdStep';
import { useLocalStorage } from '../../hooks';

const CreatePostPage = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState<Location | null>(null);
  const [secondStepData, setSecondStepData] = useState<SecondStepData>();
  const [availableAt, setAvailableAt] = useState<string | null>(null);
  const [storedLocation, setStoredLocation] = useLocalStorage<Location | null>('location', null);
  const [storedSecondStepData, setStoredSecondStepData] = useLocalStorage<SecondStepData | null>(
    'secondStepData',
    null,
  );
  const [storedAvailableAt, setStoredAvailiableAt] = useLocalStorage<string | null>(
    'availableAt',
    null,
  );
  const goNextStep = () => {
    if (step === 4) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  const goPrevStep = () => {
    if (step === 1) {
      return;
    }
    setStep((prev) => prev - 1);
  };

  const handleSecondStepData = (data: SecondStepData) => {
    setSecondStepData(data);
  };

  const handleLocation = (data: Location) => {
    setStoredLocation(data as { latitude: number; longitude: number });
    setLocation(data);
  };

  const handleAvailableAt = (data: string | null) => {
    setAvailableAt(data);
    setStoredAvailiableAt(data);
  };

  const handleStoredSecondStepData = (data: SecondStepData) => {
    setStoredSecondStepData(data);
  };

  return (
    <CreatePostPageContainer>
      {step === 1 ? (
        <FirstStep
          goNextStep={goNextStep}
          location={storedLocation ? storedLocation : location}
          handleLocation={handleLocation}
        />
      ) : step === 2 ? (
        <SecondStep
          goNextStep={goNextStep}
          goPrevStep={goPrevStep}
          handleSecondStepData={handleSecondStepData}
          handleStoredSecondStepData={handleStoredSecondStepData}
          storedSecondStepData={storedSecondStepData}
        />
      ) : (
        <ThirdStep
          latitude={location?.latitude}
          longitude={location?.longitude}
          handleAvailableAt={handleAvailableAt}
          goPrevStep={goPrevStep}
          storedAvailableAt={storedAvailableAt}
        />
      )}
    </CreatePostPageContainer>
  );
};

export default CreatePostPage;
