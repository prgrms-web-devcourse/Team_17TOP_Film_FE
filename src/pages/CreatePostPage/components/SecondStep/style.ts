import styled from '@emotion/styled';
import { Button } from '@refactors/atoms';
import Upload from '@refactors/atoms/ImageUpload';

const UploadTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DeleteImgButton = styled(Button)`
  height: 24px;
  line-height: 0;
  border: none;
  color: ${({ theme }) => theme.colors.gray700};
  background-color: ${({ theme }) => theme.colors.gray200};
  cursor: pointer;
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

const SecondStepContainer = styled.div`
  width: 100vw;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export {
  UploadTextWrapper,
  DeleteImgButton,
  PreviewImg,
  ImageUpload,
  ImageUploadIcon,
  FormTextArea,
  FormInput,
  SecondStepContainer,
};
