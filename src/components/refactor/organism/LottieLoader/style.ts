import styled from '@emotion/styled';
import { LottieProps } from './types';

const LottieContainer = styled.div<Omit<LottieProps, 'options'>>`
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: ${({ height }) => (typeof height === 'number' ? `${height}px` : height)};
  transform: ${({ deg }) => `rotate(${deg}deg)`};
`;

export { LottieContainer };
