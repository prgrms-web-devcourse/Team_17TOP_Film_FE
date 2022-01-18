import { ReactNode } from 'react';

export interface TextProps {
  children: ReactNode;
  textType: TextType;
  textColor?: TextColor;
}

type TextType =
  | 'Heading1'
  | 'Heading2'
  | 'Heading3'
  | 'Heading4'
  | 'Paragraph1'
  | 'Paragraph2'
  | 'smallText';

type TextColor =
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900'
  | 'primary'
  | 'red900';
