import styled from '@emotion/styled';
import { Text } from '../../atoms';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.gray100};
`;
const TextWrapper = styled(Text)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export { Wrapper, TextWrapper };
