import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)<{ direction?: 'column' }>`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'row')};
  justify-content: center;
  align-items: center;
  &.mobile {
    -webkit-tap-highlight-color: transparent;
  }
`;
const Li = styled.li<{ itemHoverColor: string }>`
  width: 100%;
  height: inherit;
  &:hover {
    background-color: ${({ itemHoverColor }) => itemHoverColor};
    transition: background-color 0.5s ease;
  }
`;
export { StyledLink, Li };
