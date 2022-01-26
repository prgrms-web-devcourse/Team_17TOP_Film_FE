import styled from '@emotion/styled';
import { TextProps } from './types';

const StyledText = styled.div<Pick<TextProps, 'textType' | 'textColor'>>`
  ${({ theme, textType }) => theme.fonts[textType]}
  color:${({ theme, textColor }) => (textColor ? theme.colors[textColor] : '')}
`;

export { StyledText };
