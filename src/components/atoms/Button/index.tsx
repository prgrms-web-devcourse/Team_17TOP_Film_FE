import { PrimaryBtn, SecondaryBtn, DefaultBtn } from './style';
import { ButtonProps } from './types';

const Button = ({
  children,
  buttonType,
  type = 'button',
  width = 'auto',
  height = 'auto',
  onClick,
  ...props
}: ButtonProps) => {
  switch (buttonType) {
    case 'PrimaryBtn': {
      return (
        <PrimaryBtn type={type} width={width} height={height} onClick={onClick} {...props}>
          {children}
        </PrimaryBtn>
      );
    }
    case 'SecondaryBtn': {
      return (
        <SecondaryBtn type={type} width={width} height={height} onClick={onClick} {...props}>
          {children}
        </SecondaryBtn>
      );
    }
    default: {
      return (
        <DefaultBtn type={type} width={width} height={height} onClick={onClick} {...props}>
          {children}
        </DefaultBtn>
      );
    }
  }
};

export default Button;
