import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  buttonType?: 'PrimaryBtn' | 'SecondaryBtn';
  type?: 'submit' | 'reset' | 'button';
  width?: string;
  height?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
