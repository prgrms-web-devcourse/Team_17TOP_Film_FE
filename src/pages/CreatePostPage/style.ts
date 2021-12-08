import styled from '@emotion/styled';
import { Text, Button } from '../../components/atoms';

const CreatePostPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const FirstStepButton = styled(Button)`
  position: absolute;
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

export { CreatePostPageContainer, FirstStepButton, MapHeaderText };
