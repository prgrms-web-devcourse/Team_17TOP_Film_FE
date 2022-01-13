import ButtonStyle from './style';
import { ButtonProps } from './types';

const Button = ({
  children,
  btnStyle,
  size,
  width,
  height,
  color,
  bgColor,
  border,
  borderRadius = true,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle
      btnStyle={btnStyle}
      size={size}
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
