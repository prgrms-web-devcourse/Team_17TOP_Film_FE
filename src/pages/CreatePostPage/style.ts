import styled from '@emotion/styled';
import { Text, Button } from '@refactors/atoms';

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
  justify-content: center;
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

export {
  CreatePostPageContainer,
  NextStepButton,
  FormContentWrapper,
  PostFormContainer,
  NextStepText,
  ButtonWrapper,
  ModalNoticeContainer,
  ModalNoticeText,
  AlertContent,
  AlertTitle,
  AlertModalTextContainer,
};
