import { IconProps } from './type';
import styled from '@emotion/styled';

const IconStyle = styled.span<Pick<IconProps, 'color' | 'size'>>`
  display: inline-block;
  width: ${({ size }) => (typeof size === 'number' ? `${size}px` : '')};
  height: ${({ size }) => (typeof size === 'number' ? `${size}px` : '')};
  svg {
    width: ${({ size }) => (typeof size === 'number' ? `${size}px` : '')};
    height: ${({ size }) => (typeof size === 'number' ? `${size}px` : '')};
  }
  path {
    fill: ${({ color }) => (color ? color : '')};
  }
`;

export default IconStyle;
