import { font, FontInterface } from './fonts';

declare module '@emotion/react' {
  export interface Theme extends FontInterface {}
}

export const theme = {
  font,
};
