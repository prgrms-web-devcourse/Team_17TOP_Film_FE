import font from './fonts';

export type ThemeType = typeof theme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}

export const theme = {
  font,
} as const;
