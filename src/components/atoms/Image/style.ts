import styled from '@emotion/styled';

const Img = styled.img<{ width: number; height: number; block: boolean }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  display: ${({ block }) => (block ? 'block' : 'inline-block')};
`;

export { Img };
