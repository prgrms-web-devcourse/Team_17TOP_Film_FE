import { IconProps } from './type';
import styled from '@emotion/styled';

const IconStyle = styled.span<Pick<IconProps, 'color' | 'size'>>`
  display: inline-block;
  width: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  height: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  svg {
    width: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
    height: ${({ size }) => (typeof size === 'number' ? `${size}px` : size)};
  }
  path {
    fill: ${({ color }) => (color ? color : '')};
  }
`;

export default IconStyle;
