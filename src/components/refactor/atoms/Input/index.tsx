import React, { ForwardedRef } from 'react';
import { StyledInput, InputWrapper, AlertIcon } from './style';
import { InputProps } from './types';

const Input = (
  { invalid = false, width = '100%', borderRadius = '4px', ...props }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return (
    <InputWrapper>
      <StyledInput
        ref={ref}
        width={width}
        borderRadius={borderRadius}
        invalid={invalid}
        {...props}
      ></StyledInput>
      {invalid ? <AlertIcon icon="MdErrorOutline" size={24} color={'#F5544E'} /> : ''}
    </InputWrapper>
  );
};

const forwardedInput = React.forwardRef(Input);
export default forwardedInput;
