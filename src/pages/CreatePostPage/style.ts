import styled from '@emotion/styled';
import { Text, Button, Upload } from '../../components/atoms';

const CreatePostPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const NextStepButton = styled(Button)`
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 1000;
`;
const MapHeaderText = styled(Text)`
  position: absolute;
  top: 84px;
  left: 23px;
  z-index: 1000;
`;

const PreviewImg = styled.img`
  width: 100%;
`;
const ImageUpload = styled(Upload)<{ imageURL: string }>`
  border-radius: 4px;
  position: relative;
  border: ${({ imageURL }) => (imageURL ? 'none' : '1px solid')};
  width: 100%;
  height: ${({ imageURL }) => (imageURL ? 'auto' : '299px')};
  box-sizing: border-box;
`;

const ImageUploadIcon = styled.div<{ imageURL: string }>`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  color: ${({ imageURL, theme }) => (imageURL ? theme.colors.gray300 : theme.colors.gray700)};
`;

const FormTextArea = styled.textarea`
  ${({ theme }) => theme.fonts.Paragraph1};
  resize: none;
  height: 299px;
  padding: 16px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-style: solid;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
  box-sizing: border-box;
`;

const FormInput = styled.input`
  ${({ theme }) => theme.fonts.Paragraph1};
  padding: 0 16px 0 16px;
  height: 48px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-style: solid;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
  box-sizing: border-box;
`;

const FormContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
`;

const PostFormContainer = styled.div`
  margin: 84px 24px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-content: center;
  box-sizing: border-box;
`;

const SecondStepContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export {
  CreatePostPageContainer,
  NextStepButton,
  MapHeaderText,
  PreviewImg,
  ImageUpload,
  ImageUploadIcon,
  FormTextArea,
  FormInput,
  FormContentWrapper,
  PostFormContainer,
  SecondStepContainer,
};
