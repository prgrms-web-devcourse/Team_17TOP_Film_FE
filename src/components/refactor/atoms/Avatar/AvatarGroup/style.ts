import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;

  position: relative;
  & > img.last-avatar {
    filter: grayScale(80%);
  }
`;
const CircleGroup = styled.div<{ size: number; marginLeft: number }>`
  display: flex;
  width: ${({ size }) => `${size}px`};
  margin-top: ${({ size }) => `-${size / 2 + (size * 0.1) / 2}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};

  align-items: center;
  justify-content: space-between;
`;
const Circle = styled.div<{ size: number }>`
  z-index: 100;
  width: ${({ size }) => `${size * 0.1}px`};
  height: ${({ size }) => `${size * 0.1}px`};
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
`;
export { Wrapper, Circle, CircleGroup };
