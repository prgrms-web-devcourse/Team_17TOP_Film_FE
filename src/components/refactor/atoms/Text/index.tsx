import { StyledText } from './style';
import { TextProps } from './types';

const Text = ({ textType, textColor, children, ...props }: TextProps) => {
  return (
    <StyledText textType={textType} textColor={textColor} {...props}>
      {children}
    </StyledText>
  );
};
export default Text;
