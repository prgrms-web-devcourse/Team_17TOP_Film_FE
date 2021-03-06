import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Text } from '../../../../components/atoms';
import { useLocalStorage } from '../../../../hooks';
import { NextStepButton, FormContentWrapper, PostFormContainer, NextStepText } from '../../style';
import {
  PreviewImg,
  ImageUpload,
  ImageUploadIcon,
  FormTextArea,
  FormInput,
  UploadTextWrapper,
  DeleteImgButton,
  SecondStepContainer,
} from './style';
import { SecondStepProps } from '../../types';
import AlertModal from './AlertModal';
import UploadHeader from '../UploadHeader';

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

  const handleInput = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setState((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [state],
  );

  const handleSetImageFile = useCallback((file: File) => {
    setFile(file);
  }, []);

  const handleDeleteImageFile = useCallback(() => {
    setFile(undefined);
    setImageURL('');
  }, []);

  const dataURLToFile = useCallback(async (url: string, filename: string) => {
    const type = filename.split('.').pop();
    const convertedFile = await fetch(url)
      .then((res) => res.arrayBuffer())
      .then((buf) => new File([buf], filename, { type: `image/${type}` }));

    return convertedFile;
  }, []);

  const asyncDataURLToFile = useCallback(async () => {
    if (storedSecondStepData?.image && storedFilename) {
      const convertFile = await dataURLToFile(storedSecondStepData.image as string, storedFilename);
      setFile(convertFile);
    }
  }, []);

  const fileToDataURL = useCallback((file: File) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        setImageURL(e.target?.result as string);
      };
    } else {
      setImageURL('');
    }
  }, []);

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

  const checkForm = useCallback(() => {
    const { title, previewText, content } = state;
    if (title && previewText && (file || state.content)) {
      return saveFormData();
    }

    const alertTextArr = [];
    if (!title) {
      alertTextArr.push('"?????? ??????"');
    }
    if (!previewText) {
      alertTextArr.push('"????????? ??????"');
    }
    if (!(file || content)) {
      alertTextArr.push('"????????? ????????? ?????????"');
    }
    setAlertText(`${alertTextArr.join(', ')}`);
    return setIsModalOpen(true);
  }, [state, file]);

  const saveFormData = useCallback(() => {
    const data = { ...state, image: file };
    const storedData = { ...state, image: imageURL };
    handleSecondStepData(data);
    handleStoredSecondStepData(storedData);
    file && setStoredFilename(file.name);
    goNextStep();
  }, [file, imageURL, state]);

  return (
    <SecondStepContainer>
      <UploadHeader handleBackBtn={goPrevStep} />
      <PostFormContainer>
        <Text textType="Heading3">????????? ????????? ???????????????</Text>
        <FormContentWrapper>
          <Text textType="Heading4">?????? ??????</Text>
          <FormInput
            name="title"
            value={state.title}
            onChange={handleInput}
            placeholder={'?????? 20????????? ?????? ???????????????.'}
            maxLength={20}
          ></FormInput>
        </FormContentWrapper>
        <FormContentWrapper>
          <Text textType="Heading4">????????? ??????</Text>
          <FormInput
            name="previewText"
            value={state.previewText}
            onChange={handleInput}
            placeholder={'?????? 30????????? ?????? ???????????????.'}
            maxLength={30}
          ></FormInput>
        </FormContentWrapper>
        <FormContentWrapper>
          <UploadTextWrapper>
            <Text textType="Heading4">?????? ?????????</Text>
            <DeleteImgButton btnStyle="secondary" size="medium" onClick={handleDeleteImageFile}>
              ?????? ??????
            </DeleteImgButton>
          </UploadTextWrapper>
          <ImageUpload
            droppable
            name="image"
            accept={['all']}
            onChange={handleSetImageFile}
            imageURL={imageURL}
            fileDelete={file ? false : true}
          >
            <ImageUploadIcon imageURL={imageURL}>+</ImageUploadIcon>
            {imageURL ? <PreviewImg src={imageURL} /> : ''}
          </ImageUpload>
        </FormContentWrapper>
        <FormContentWrapper>
          <Text textType="Heading4">?????? ??????</Text>
          <FormTextArea
            name="content"
            value={state.content}
            onChange={handleInput}
            placeholder={'?????? 1000????????? ?????? ???????????????.'}
            maxLength={1000}
          ></FormTextArea>
        </FormContentWrapper>
      </PostFormContainer>
      <NextStepButton btnStyle="primary" size="full" onClick={checkForm}>
        <NextStepText textType="Paragraph1">??????</NextStepText>
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
