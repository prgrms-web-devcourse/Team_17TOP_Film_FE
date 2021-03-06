import styled from '@emotion/styled';
import { Text, Header } from '../../components/atoms';

const HomePageHeader = styled(Header)`
  z-index: 10;
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
export { HomePageHeader, ModalWrapper, ModalText, ButtonGroup };
