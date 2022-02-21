import styled from '@emotion/styled';

const Wrapper = styled.nav<{ bgColor: string }>`
  position: fixed;
  width: 100%;
  height: 52px;
  bottom: 0;
  left: 0;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 2px -7px 8px 0px rgba(0, 0, 0, 0.1);
  z-index: 900;
`;

const Container = styled.ul<{ divider?: boolean; dividerColor?: string }>`
  height: inherit;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    border-right: ${({ divider, dividerColor }) =>
      divider ? `1px solid ${dividerColor || 'lightgray'}` : 'none'};
    &:last-of-type {
      border-right: none;
    }
  }
`;

export { Wrapper, Container };
