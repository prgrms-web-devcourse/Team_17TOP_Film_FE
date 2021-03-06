import { useEffect, useState } from 'react';
import { CreatePostPageContainer } from './style';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import { SecondStepData, Location } from './types';
import ThirdStep from './components/ThirdStep';
import { useLocalStorage } from '../../hooks';
import { createPostApi } from '../../utils/apis/posts';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/organism/Toast';
import { changeAuthorApi } from '../../utils/apis/author';
import { useSelectedUserList } from '../../contexts/SelectedUserListProvider';
import Loader from '../../components/organism/Loader';
import LocalstorageConfirmModal from './components/LocalStorageConfirmModal';
import { clearLocalStoragePostData } from './utils/clearLocalStoragePostData';

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
  const [storedAvailableAt, setStoredAvailableAt] = useLocalStorage<string | null>(
    'availableAt',
    null,
  );
  const [isConfirm, setIsConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [storedValueConfirm, setStoredValueConfirm] = useState(false);
  const [storedValueConfirmModalOpen, setStoredValueConfirmModalOpen] = useState(false);
  const selectedUserList = useSelectedUserList();
  const navigate = useNavigate();

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
    setStoredLocation(data as Location);
    setLocation(data);
  };

  const handleAvailableAt = (data: string | null) => {
    setAvailableAt(data);
    setStoredAvailableAt(data);
  };

  const handleStoredSecondStepData = (data: SecondStepData) => {
    setStoredSecondStepData(data);
  };

  const handleIsConfirm = () => {
    setIsConfirm(true);
  };

  const handleLocalStorageConfirm = () => {
    setStoredValueConfirm(true);
  };
  const handleLcalStorageConfirmModal = () => {
    setStoredValueConfirmModalOpen(false);
  };

  const createPost = async (formData: FormData) => {
    setIsConfirm(false);
    setIsLoading(true);
    const { data, error } = await createPostApi(formData);
    if (error.errorMessage) {
      setIsLoading(false);
      Toast.warn('???????????? ?????? ?????????????????? ????');
      return;
    }
    if (await addAuthor(data.postId)) {
      setIsLoading(false);
      clearLocalStoragePostData();
      Toast.info('?????? ????????? ????????????????????? ????');
      navigate(`/${data.postId}`);
    }
  };

  const addAuthor = async (postId: number) => {
    const selectedUserIdArr = selectedUserList.selectedUserList.map((user) => {
      return { userId: user.id };
    });
    const authorList = { fixAuthorityList: selectedUserIdArr };
    const { error } = await changeAuthorApi({ authorList, postId });
    if (error.errorMessage) {
      Toast.warn('???????????? ?????? ?????????????????? ????');
      return false;
    }
    return true;
  };

  useEffect(() => {
    if (!isConfirm) {
      return;
    }

    const formData = new FormData();
    formData.append(
      'com',
      JSON.stringify({
        title: secondStepData?.title,
        content: secondStepData?.content,
        previewText: secondStepData?.previewText,
        latitude: location?.latitude.toString(),
        longitude: location?.longitude.toString(),
        availableAt,
      }),
    );
    formData.append('files', secondStepData?.image as Blob);

    createPost(formData);
  }, [isConfirm]);

  useEffect(() => {
    if (!storedLocation) {
      return;
    }
    setStoredValueConfirmModalOpen(true);
  }, []);

  return (
    <CreatePostPageContainer>
      {isLoading ? <Loader>?????? ????????? ???...</Loader> : ''}
      {storedValueConfirmModalOpen ? (
        <LocalstorageConfirmModal
          handleIsModalClose={handleLcalStorageConfirmModal}
          isModalOpen={storedValueConfirmModalOpen}
          handleIsConfirm={handleLocalStorageConfirm}
        ></LocalstorageConfirmModal>
      ) : (
        ''
      )}
      {step === 1 ? (
        <FirstStep
          goNextStep={goNextStep}
          location={storedValueConfirm ? storedLocation : location}
          handleLocation={handleLocation}
        />
      ) : step === 2 ? (
        <SecondStep
          goNextStep={goNextStep}
          goPrevStep={goPrevStep}
          handleSecondStepData={handleSecondStepData}
          handleStoredSecondStepData={handleStoredSecondStepData}
          storedSecondStepData={storedValueConfirm ? storedSecondStepData : null}
        />
      ) : (
        <ThirdStep
          latitude={location?.latitude}
          longitude={location?.longitude}
          handleAvailableAt={handleAvailableAt}
          goPrevStep={goPrevStep}
          storedAvailableAt={storedValueConfirm ? storedAvailableAt : null}
          handleIsConfirm={handleIsConfirm}
        />
      )}
    </CreatePostPageContainer>
  );
};

export default CreatePostPage;
