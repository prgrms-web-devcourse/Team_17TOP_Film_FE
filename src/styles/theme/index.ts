import fonts from './fonts';
import colors from './colors';
import gaps from './gaps';
import shadows from './shadows';
type ThemeType = typeof theme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

export const theme = {
  fonts,
  colors,
  gaps,
  shadows,
} as const;
