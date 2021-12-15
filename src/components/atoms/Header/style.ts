import styled from '@emotion/styled';

const Wrapper = styled.div<{ bgColor?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MiddleSide = styled.div`
  position: relative;
  margin: 0 auto;
`;
const Side = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { Wrapper, MiddleSide, Side };
