import styled from '@emotion/styled';
import { Navigation } from '../../atoms';

const Elem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  gap: 5px;
  cursor: pointer;
`;
const CustomNavigation = styled(Navigation)`
  position: fixed;
  bottom: 0;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  z-index: 10001;
`;
export { Elem, CustomNavigation };
