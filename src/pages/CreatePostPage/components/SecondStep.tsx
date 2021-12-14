import React, { ChangeEvent, useEffect, useState } from 'react';
import { Text } from '../../../components/atoms';
import { useLocalStorage } from '../../../hooks';
import {
  NextStepButton,
  PreviewImg,
  ImageUpload,
  ImageUploadIcon,
  FormTextArea,
  FormInput,
  FormContentWrapper,
  PostFormContainer,
  UploadTextWrapper,
  DeleteImgButton,
  SecondStepContainer,
  NextStepText,
} from '../style';
import { SecondStepProps } from '../types';
import AlertModal from './AlertModal';
import UploadHeader from './UploadHeader';

const SecondStep = ({
  goNextStep,
  goPrevStep,
  handleSecondStepData,
  handleStoredSecondStepData,
  storedSecondStepData,
}: SecondStepProps) => {
  const [imageURL, setImageURL] = useState(storedSecondStepData?.image as string);
  const [file, setFile] = useState<File>();
  const [storedFilename, setStoredFilename] = useLocalStorage<string | null>('filename', null);
  const [state, setState] = useState({
    title: storedSecondStepData?.title || '',
    previewText: storedSecondStepData?.previewText || '',
    content: storedSecondStepData?.content || '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [alertText, setAlertText] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSetImageFile = (file: File) => {
    setFile(file);
  };

  const handleDeleteImageFile = () => {
    setFile(undefined);
    setImageURL('');
  };

  const dataURLToFile = async (url: string, filename: string) => {
    const type = filename.split('.').pop();
    const convertedFile = await fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], filename, { type: `image/${type}` }));

    return convertedFile;
  };

  const asyncDataURLToFile = async () => {
    if (storedSecondStepData?.image && storedFilename) {
      const convertFile = await dataURLToFile(
        storedSecondStepData?.image as string,
        storedFilename,
      );
      await setFile(convertFile);
    }
  };

  const fileToDataURL = (file: File) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImageURL(e.target?.result as string);
      };
    } else {
      setImageURL('');
    }
  };

  useEffect(() => {
    if (file) {
      fileToDataURL(file);
    }
  }, [file]);

  useEffect(() => {
    if (storedSecondStepData?.image && storedFilename) {
      asyncDataURLToFile();
    }
  }, []);

  const checkForm = () => {
    const { title, previewText } = state;
    if (title && previewText && (file || state.content)) {
      return saveFormData();
    }

    const alertTextArr = [];
    if (!title) {
      alertTextArr.push('"필름 이름"');
    }
    if (!previewText) {
      alertTextArr.push('"엿보기 문구"');
    }
    if (!(file || state.content)) {
      alertTextArr.push('"사진과 내용중 한가지"');
    }
    setAlertText(`${alertTextArr.join(', ')}`);
    return setIsModalOpen(true);
  };

  const saveFormData = () => {
    const data = { ...state, image: file };
    const storedData = { ...state, image: imageURL };
    handleSecondStepData(data);
    handleStoredSecondStepData(storedData);
    file && setStoredFilename(file.name);
    goNextStep();
  };

  return (
    <SecondStepContainer>
      <UploadHeader handleBackBtn={goPrevStep} />
      <PostFormContainer>
        <Text textType="Heading3">필름에 내용을 담아주세요</Text>
        <FormContentWrapper>
          <Text textType="Heading4">필름 이름</Text>
          <FormInput
            name="title"
            value={state.title}
            onChange={handleInput}
            placeholder={'최대 20자까지 작성 가능합니다.'}
            maxLength={20}
          ></FormInput>
        </FormContentWrapper>
        <FormContentWrapper>
          <Text textType="Heading4">엿보기 문구</Text>
          <FormInput
            name="previewText"
            value={state.previewText}
            onChange={handleInput}
            placeholder={'최대 30자까지 작성 가능합니다.'}
            maxLength={30}
          ></FormInput>
        </FormContentWrapper>
        <FormContentWrapper>
          <UploadTextWrapper>
            <Text textType="Heading4">사진 업로드</Text>
            <DeleteImgButton onClick={handleDeleteImageFile}>사진 삭제</DeleteImgButton>
          </UploadTextWrapper>
          <ImageUpload
            droppable
            name="image"
            accept="image/*"
            onChange={handleSetImageFile}
            imageURL={imageURL}
          >
            <ImageUploadIcon imageURL={imageURL}>+</ImageUploadIcon>
            {imageURL ? <PreviewImg src={imageURL} /> : ''}
          </ImageUpload>
        </FormContentWrapper>
        <FormContentWrapper>
          <Text textType="Heading4">내용 작성</Text>
          <FormTextArea
            name="content"
            value={state.content}
            onChange={handleInput}
            placeholder={'최대 1000자까지 작성 가능합니다.'}
            maxLength={1000}
          ></FormTextArea>
        </FormContentWrapper>
      </PostFormContainer>
      <NextStepButton buttonType="PrimaryBtn" onClick={checkForm}>
        <NextStepText textType="Paragraph1">다음</NextStepText>
      </NextStepButton>
      {isModalOpen ? (
        <AlertModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          alertText={alertText}
        />
      ) : (
        <></>
      )}
    </SecondStepContainer>
  );
};

export default SecondStep;
