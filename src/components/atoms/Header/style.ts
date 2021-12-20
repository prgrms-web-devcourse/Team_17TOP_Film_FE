import styled from '@emotion/styled';

const Wrapper = styled.div<{ bgColor?: string }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  padding: 0 ${({ theme }) => theme.gaps.default_margin};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ bgColor }) => bgColor};
  box-sizing: border-box;
  z-index: 10;
`;
const MiddleSide = styled.div``;

export { Wrapper, MiddleSide };
