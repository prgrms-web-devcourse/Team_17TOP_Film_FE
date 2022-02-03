import styled from '@emotion/styled';

const LottieContainer = styled.div<{
  width: string | number;
  height: string | number;
}>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
`;

export { LottieContainer };
