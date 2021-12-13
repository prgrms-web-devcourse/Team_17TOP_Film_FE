import React, { ChangeEvent, useEffect, useState } from 'react';
import { Text } from '../../../components/atoms';
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

const SecondStep = ({ goNextStep, goPrevStep, handleSecondStepData }: SecondStepProps) => {
  const [imageURL, setImageURL] = useState('');
  const [file, setFile] = useState<File>();
  const [state, setState] = useState({ title: '', previewText: '', content: '' });
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

  const FileToDataURL = (file: File) => {
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
    file && FileToDataURL(file);
  }, [file]);

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
    const data = { ...state, imageFiles: [{ imageOrder: 0, image: file }] };
    handleSecondStepData(data);
    goNextStep();
  };

  return (
    <SecondStepContainer>
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
