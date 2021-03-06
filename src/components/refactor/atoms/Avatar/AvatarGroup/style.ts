import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: fit-content;
  position: relative;
`;
const AvatarWrapper = styled.div`
  display: flex;
  width: fit-content;
`;
const CircleGroup = styled.div<{ size: number; marginLeft: number }>`
  position: absolute;
  display: flex;
  width: ${({ size }) => `${size}px`};
  margin-top: ${({ size }) => `-${size / 2 + (size * 0.1) / 2}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};

  align-items: center;
  justify-content: space-around;
`;
const Circle = styled.div<{ size: number }>`
  z-index: 100;
  width: ${({ size }) => `${size * 0.1}px`};
  height: ${({ size }) => `${size * 0.1}px`};
  background-color: white;
  border-radius: 50%;
`;
export { Wrapper, Circle, CircleGroup, AvatarWrapper };
