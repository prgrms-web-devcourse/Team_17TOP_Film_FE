import { useEffect, useState } from 'react';
import { CreatePostPageContainer } from './style';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import { SecondStepData, Location } from './types';

const CreatePostPage = () => {
  const [step, setStep] = useState(1);
  const [location, setLocation] = useState<Location | null>(null);
  const [secondStepData, setSecondStepData] = useState({});

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

  useEffect(() => {
    console.log('유저 위치 정보');
    console.log([location]);
  }, [location]);

  useEffect(() => {
    console.log('유저 입력 데이터 정보');
    console.log(secondStepData);
  }, [secondStepData]);

  useEffect(() => {
    console.log('스텝 정보');
    console.log(step);
  }, [step]);

  return (
    <CreatePostPageContainer>
      {step === 1 ? (
        <FirstStep goNextStep={goNextStep} location={location} handleLocation={handleLocation} />
      ) : (
        <SecondStep
          goNextStep={goNextStep}
          goPrevStep={goPrevStep}
          handleSecondStepData={handleSecondStepData}
        />
      )}
    </CreatePostPageContainer>
  );
};

export default CreatePostPage;
