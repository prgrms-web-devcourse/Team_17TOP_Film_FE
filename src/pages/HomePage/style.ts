import styled from '@emotion/styled';
import { Text, Button, Header } from '../../components/atoms';

const HomePageHeader = styled(Header)`
  z-index: 10;
`;

const PostCreateBtn = styled(Button)`
  position: fixed;
  bottom: 0;
  z-index: 10;
  border-radius: 0;
  height: 56px;
`;

const ModalWrapper = styled.div`
  min-width: 300px;
  text-align: center;
`;
const ModalText = styled(Text)`
  margin-top: ${({ theme }) => theme.gaps.gap2};
`;
const ButtonGroup = styled.div`
  width: 100%;
  margin-top: ${({ theme }) => theme.gaps.gap4};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
export { HomePageHeader, PostCreateBtn, ModalWrapper, ModalText, ButtonGroup };
