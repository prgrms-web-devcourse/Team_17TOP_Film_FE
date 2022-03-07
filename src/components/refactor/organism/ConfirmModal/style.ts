import styled from '@emotion/styled';
import { Text, Button } from '@refactors/atoms';

const ModalWrapper = styled.div`
  width: 100%;
  min-width: 300px;
  max-width: 480px;
  padding: ${({ theme }) => theme.gaps.gap2};
  box-sizing: border-box;
  background: #fff;
  border-radius: 4px;
  text-align: center;
`;
const ModalText = styled(Text)`
  margin-top: ${({ theme }) => theme.gaps.gap2};
  line-height: 1.4;
  word-break: keep-all;
`;
const ButtonGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.gap1};
  margin-top: ${({ theme }) => theme.gaps.gap4};
`;
const ModalButton = styled(Button)`
  justify-content: center;
`;

export { ModalWrapper, ModalText, ButtonGroup, ModalButton };
