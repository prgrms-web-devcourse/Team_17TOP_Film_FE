import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  buttonType?: string;
  type?: 'submit' | 'reset' | 'button';
  width?: string;
  height?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
