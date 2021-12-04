import fonts from './fonts';
import colors from './colors';
export type ThemeType = typeof theme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
export const theme = {
  fonts,
  colors,
} as const;
