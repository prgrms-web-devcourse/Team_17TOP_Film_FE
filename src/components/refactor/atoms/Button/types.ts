import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  btnStyle: 'primary' | 'secondary' | 'default';
  size: 'small' | 'medium' | 'full';
  width?: number | string;
  height?: number | string;
  color?: string;
  bgColor?: string;
  border?: string;
  borderRadius?: boolean;
  hover?: boolean;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
  [x: string]: any;
}
