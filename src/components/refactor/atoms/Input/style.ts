import styled from '@emotion/styled';
import { InputProps } from './types';
import calenderIcon from '../../../../assets/icons/icon_calender.svg';
import { Icon } from '@refactors/atoms';

const StyledInput = styled.input<InputProps>`
  ${({ theme }) => theme.fonts.Paragraph1};
  position: relative;
  background-color: white;
  padding: 0 16px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  height: 48px;
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius};
  border-color: ${({ theme, invalid }) => (invalid ? theme.colors.red900 : theme.colors.gray400)};
  border-style: solid;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
  box-sizing: border-box;
  :focus {
    outline: none;
    border-color: ${({ theme, invalid }) => !invalid && theme.colors.primary};
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
    border-color: ${({ theme }) => theme.colors.gray200};
  }
  ::-webkit-datetime-edit {
    ${({ theme }) => theme.fonts.Paragraph1}
    font-weight: 700;
    color: ${({ value, theme }) => (value ? theme.colors.gray800 : theme.colors.gray500)};
    margin-left: 34px;
    padding-left: 16px;
    border-left: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray500};
    line-height: 48px;
    height: 48px;
  }
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    background: url(${calenderIcon}) no-repeat;
    left: 16px;
    margin-left: 0;
  }
  box-sizing: border-box;
`;
const InputWrapper = styled.div`
  display: flex;
  position: relative;
`;
const AlertIcon = styled(Icon)`
  position: absolute;
  right: 24px;
  top: 25%;
`;

export { StyledInput, InputWrapper, AlertIcon };
