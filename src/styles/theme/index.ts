import fonts from './fonts';
import colors from './colors';
import gaps from './gaps';

type ThemeType = typeof theme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
export const theme = {
  fonts,
  colors,
  gaps,
} as const;
