import styled from '@emotion/styled';
import { Props } from '.';

const Img = styled.img<Pick<Props, 'width' | 'height' | 'block' | 'borderRadius'>>`
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)}
  height: ${({ height }) => height}px;
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : undefined)}
`;

export { Img };
