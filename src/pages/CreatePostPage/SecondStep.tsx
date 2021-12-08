import React, { ChangeEvent, useEffect, useState } from 'react';
import { Text } from '../../components/atoms';
import {
  NextStepButton,
  PreviewImg,
  ImageUpload,
  ImageUploadIcon,
  FormTextArea,
  FormInput,
  FormContentWrapper,
  PostFormContainer,
  SecondStepContainer,
} from './style';
import { SecondStepData } from './types';

interface Props {
  goNextStep(): void;
  goPrevStep(): void;
  handleSecondStepData(obj: SecondStepData): void;
}

const SecondStep = ({ goNextStep, goPrevStep, handleSecondStepData }: Props) => {
  const [imageURL, setImageURL] = useState('');
  const [file, setFile] = useState<File>();
  const [title, setTitle] = useState('');
  const [previewText, setPreviewText] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handlePreviewTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPreviewText(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageFile = (file: File) => {
    setFile(file);
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
    if (!(file || content)) {
      return false;
    }
    return true;
  };

  const saveFormData = () => {
    const data = { imageFiles: [file], title, previewText, content };
    handleSecondStepData(data);
    goNextStep();
  };

  return (
    <SecondStepContainer>
      <button onClick={goPrevStep}>뒤로가기</button>
      <PostFormContainer>
        <Text textType="Heading3">필름에 내용을 담아주세요</Text>
        <FormContentWrapper>
          <Text textType="Heading4">필름 이름</Text>
          <FormInput
            value={title}
            onChange={handleTitleChange}
            placeholder={'최대 20자까지 작성 가능합니다.'}
            maxLength={20}
          ></FormInput>
        </FormContentWrapper>
        <FormContentWrapper>
          <Text textType="Heading4">엿보기 문구</Text>
          <FormInput
            value={previewText}
            onChange={handlePreviewTextChange}
            placeholder={'최대 30자까지 작성 가능합니다.'}
            maxLength={30}
          ></FormInput>
        </FormContentWrapper>
        <FormContentWrapper>
          <Text textType="Heading4">사진 업로드</Text>
          <ImageUpload
            droppable
            name="image"
            accept="image/*"
            onChange={handleImageFile}
            imageURL={imageURL}
          >
            <ImageUploadIcon imageURL={imageURL}>+</ImageUploadIcon>
            {imageURL ? <PreviewImg src={imageURL} /> : ''}
          </ImageUpload>
        </FormContentWrapper>
        <FormContentWrapper>
          <Text textType="Heading4">내용 작성</Text>
          <FormTextArea
            value={content}
            onChange={handleContentChange}
            placeholder={'최대 1000자까지 작성 가능합니다.'}
            maxLength={1000}
          ></FormTextArea>
        </FormContentWrapper>
      </PostFormContainer>
      <NextStepButton
        buttonType="PrimaryBtn"
        onClick={() => {
          checkForm() ? saveFormData() : alert('이미지를 업로드 하거나 내용을 입력해주세요');
        }}
      >
        <Text textType="Paragraph1">다음</Text>
      </NextStepButton>
    </SecondStepContainer>
  );
};

export default SecondStep;
