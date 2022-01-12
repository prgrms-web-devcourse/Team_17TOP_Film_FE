import ButtonStyle from './style';
import { ButtonProps } from './types';

const Button = ({ children, btnStyle, type = 'button', onClick, ...props }: ButtonProps) => {
  return (
    <ButtonStyle btnStyle={btnStyle} type={type} onClick={onClick} {...props}>
      {children}
    </ButtonStyle>
  );
};

export default Button;
