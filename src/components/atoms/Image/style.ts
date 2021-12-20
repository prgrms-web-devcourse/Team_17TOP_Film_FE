import styled from '@emotion/styled';

const Img = styled.img<{ width: number | string; height: number | string; block: boolean }>`
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}px`)}
  height: ${({ height }) => height}px;
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

export { Img };
