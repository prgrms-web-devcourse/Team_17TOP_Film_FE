import { MouseEvent, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  btnStyle: 'primary' | 'secondary' | 'default' | 'custom';
  type: 'submit' | 'reset' | 'button';
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void;
}
