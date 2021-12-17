import styled from '@emotion/styled';

const Wrapper = styled.nav<{ bgColor?: string }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : 'white')};
  z-index: 1000;
`;
const MiddleSide = styled.ul<{ gap?: number }>`
  position: relative;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => `${gap ? gap : 0}px`};
`;
const Side = styled.div`
  position: absolute;
  width: 100%;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftSide = styled.ul<{ gap?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 0 28px;
  gap: ${({ gap }) => `${gap ? gap : 0}px`};
`;
const RightSide = styled(LeftSide)`
  margin: 0 28px 0 auto;
`;

export { Wrapper, LeftSide, RightSide, MiddleSide, Side };
