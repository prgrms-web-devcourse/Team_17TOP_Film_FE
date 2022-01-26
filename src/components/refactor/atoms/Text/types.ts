import { ReactNode } from 'react';
import { theme } from '../../../../styles/theme';

export interface TextProps {
  children: ReactNode;
  textType: TextType;
  textColor?: TextColor;
}

type TextType = keyof typeof theme.fonts;

type TextColor = keyof typeof theme.colors;
