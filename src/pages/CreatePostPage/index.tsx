import { useState } from 'react';
import { CreatePostPageContainer } from './style';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import { SecondStepData, Location } from './types';
import ThirdStep from './components/ThirdStep';

const CreatePostPage = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState<Location | null>(null);
  const [secondStepData, setSecondStepData] = useState<SecondStepData>();
  const [availableAt, setAvailableAt] = useState('');

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
    setLocation(data);
  };

  const handleAvailableAt = (data: string) => {
    setAvailableAt(data);
  };

  return (
    <CreatePostPageContainer>
      {step === 1 ? (
        <FirstStep goNextStep={goNextStep} location={location} handleLocation={handleLocation} />
      ) : step === 2 ? (
        <SecondStep
          goNextStep={goNextStep}
          goPrevStep={goPrevStep}
          handleSecondStepData={handleSecondStepData}
        />
      ) : (
        <ThirdStep
          latitude={location?.latitude}
          longitude={location?.longitude}
          handleAvailableAt={handleAvailableAt}
        />
      )}
    </CreatePostPageContainer>
  );
};

export default CreatePostPage;
