import React, { ForwardedRef } from 'react';
import { StyledInput } from './style';
interface InputProps {
  invalid?: boolean;
  width?: string | number;
  borderRadius?: string | number;
  [x: string]: any;
}

const Input = (
  { invalid = false, width = '100%', borderRadius = '4px', ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <StyledInput
      ref={ref}
      width={width}
      borderRadius={borderRadius}
      invalid={invalid}
      {...props}
    ></StyledInput>
  );
};

const forwardedInput = React.forwardRef(Input);
export default forwardedInput;
