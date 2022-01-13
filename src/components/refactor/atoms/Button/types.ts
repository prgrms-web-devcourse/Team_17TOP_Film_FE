import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  btnStyle: 'primary' | 'secondary' | 'default';
  type: 'submit' | 'reset' | 'button';
  width?: number | string;
  height?: number | string;
  color?: string;
  bgColor?: string;
  border?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}
