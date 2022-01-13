import ButtonStyle from './style';
import { ButtonProps } from './types';

const Button = ({
  children,
  btnStyle,
  type = 'button',
  width,
  height,
  color,
  bgColor,
  border,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle
      btnStyle={btnStyle}
      type={type}
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      border={border}
      onClick={onClick}
      {...props}
    >
      {children}
    </ButtonStyle>
  );
};

export default Button;
