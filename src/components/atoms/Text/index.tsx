import { ReactNode } from 'react';
import { Heading1, Heading2, Heading3, Heading4, Paragraph1, Paragraph2, SmallText } from './style';

interface Props {
  children: ReactNode;
  textType: TextType;
  [x: string]: any;
}

type TextType =
  | 'Heading1'
  | 'Heading2'
  | 'Heading3'
  | 'Heading4'
  | 'Paragraph1'
  | 'Paragraph2'
  | 'SmallText';

const Text = ({ textType, children, ...props }: Props) => {
  switch (textType) {
    case 'Heading1': {
      return <Heading1 {...props}>{children}</Heading1>;
    }
    case 'Heading2': {
      return <Heading2 {...props}>{children}</Heading2>;
    }
    case 'Heading3': {
      return <Heading3 {...props}>{children}</Heading3>;
    }
    case 'Heading4': {
      return <Heading4 {...props}>{children}</Heading4>;
    }
    case 'Paragraph1': {
      return <Paragraph1 {...props}>{children}</Paragraph1>;
    }
    case 'Paragraph2': {
      return <Paragraph2 {...props}>{children}</Paragraph2>;
    }
    case 'SmallText': {
      return <SmallText {...props}>{children}</SmallText>;
    }
    default: {
      console.warn('지정된 textType이아닙니다.');
      break;
    }
  }
  return null;
};

export default Text;
