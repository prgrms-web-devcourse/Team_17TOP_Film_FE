import { StyledInput } from './style';
interface InputProps {
  invalid?: boolean;
  width?: string | number;
  borderRadius?: string | number;
  [x: string]: any;
}

const Input = ({ invalid = false, width = '100%', borderRadius = '4px', ...props }: InputProps) => {
  return (
    <StyledInput
      width={width}
      borderRadius={borderRadius}
      invalid={invalid}
      {...props}
    ></StyledInput>
  );
};
export default Input;
