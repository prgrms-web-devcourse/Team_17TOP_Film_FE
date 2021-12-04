import { colors } from './colors';
export interface FontInterface {
  font: {
    Heading1: PredefinedFontStyleType;
    Heading2: PredefinedFontStyleType;
    Heading3: PredefinedFontStyleType;
    Heading4: PredefinedFontStyleType;
    Paragraph1: PredefinedFontStyleType;
    Paragraph2: PredefinedFontStyleType;
    smallText: PredefinedFontStyleType;
  };
}

type PredefinedFontStyleType = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  color: string;
};

const font = {
  Heading1: {
    fontSize: '48px',
    fontWeight: 800,
    lineHeight: 1.4,
    color: colors.gray900,
  },
  Heading2: {
    fontSize: '36px',
    fontWeight: 800,
    lineHeight: 1.4,
    color: colors.gray900,
  },
  Heading3: {
    fontSize: '24px',
    fontWeight: 800,
    lineHeight: 1.4,
    color: colors.gray900,
  },
  Heading4: {
    fontSize: '20px',
    fontWeight: 800,
    lineHeight: 1.4,
    color: colors.gray800,
  },
  Paragraph1: {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: colors.gray700,
  },
  Paragraph2: {
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: colors.gray700,
  },
  smallText: {
    fontSize: '12px',
    fontWeight: 500,
    lineHeight: 1.4,
    color: colors.gray600,
  },
};
export default font;
