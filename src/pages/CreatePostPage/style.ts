import styled from '@emotion/styled';
import { Text, Button, Upload } from '../../components/atoms';
import calenderIcon from '../../assets/icons/icon_calender.svg';

const DeleteImgButton = styled(Button)`
  height: 24px;
  line-height: 0;
  border: none;
  color: ${({ theme }) => theme.colors.gray700};
  background-color: ${({ theme }) => theme.colors.gray200};
  cursor: pointer;
`;

const UploadTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CreatePostPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const NextStepButton = styled(Button)`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 2;
  border-radius: 0;
`;
const MapHeaderText = styled(Text)`
  position: absolute;
  top: 84px;
  left: 23px;
  line-height: 1.2;
  z-index: 1;
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
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
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
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
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
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const ThirdStepContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: 54px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ThirdStepPostFormContainer = styled(PostFormContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DateInput = styled.input`
  width: 100%;
  background: white;
  padding: 0 16px 0 16px;
  height: 48px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-style: solid;
  ::-webkit-datetime-edit {
    ${({ theme }) => theme.fonts.Paragraph1}
    font-weight: 700;
    color: ${({ value, theme }) => (value ? theme.colors.gray800 : theme.colors.gray500)};
    margin-left: 38px;
    padding-left: 16px;
    border-left: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray500};
    line-height: 48px;
    height: 48px;
  }
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    background: url(${calenderIcon}) no-repeat;
    left: 19px;
  }
  box-sizing: border-box;
`;
const GuideText = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray800};
  margin-top: 200px;
  margin-bottom: 100px;
`;
const NextStepText = styled(Text)`
  color: white;
`;

const ButtonWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 11px;
`;

const ModalNoticeContainer = styled.div`
  width: 350px;
  height: 162px;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 22px 6px 10px 6px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const ModalNoticeText = styled(Text)`
  text-align: center;
  line-height: 1.4;
`;

const AlertContent = styled(Text)`
  color: ${({ theme }) => theme.colors.red900};
  margin-bottom: 16px;
`;

const AlertTitle = styled(Text)`
  line-height: 1.4;
`;
const AlertModalTextContainer = styled.div`
  padding: 16px;
  width: 350px;
  height: 120px;
  text-align: center;
`;
const SearchTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.gap1};
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
  UploadTextWrapper,
  DeleteImgButton,
  SecondStepContainer,
  FormWrapper,
  ThirdStepPostFormContainer,
  DateInput,
  GuideText,
  NextStepText,
  ButtonWrapper,
  ModalNoticeContainer,
  ModalNoticeText,
  AlertContent,
  AlertTitle,
  AlertModalTextContainer,
  ThirdStepContainer,
  SearchTitleWrapper,
};
