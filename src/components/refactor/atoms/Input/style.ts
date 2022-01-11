import styled from '@emotion/styled';

const StyledInput = styled.input<{
  width: string | number | undefined;
  borderRadius: string | number | undefined;
  invalid: boolean | undefined;
}>`
  ${({ theme }) => theme.fonts.Paragraph1};
  padding: 0 16px 0 16px;
  width: ${({ width }) =>
    typeof width === 'undefined' ? '' : typeof width === 'string' ? width : `${width}px`};
  height: 48px;
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'undefined'
      ? '4px'
      : typeof borderRadius === 'string'
      ? borderRadius
      : `${borderRadius}px`};
  border-color: ${({ theme, invalid }) => (invalid ? theme.colors.red900 : theme.colors.gray400)};
  border-style: solid;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
  box-sizing: border-box;
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
  :disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
    border-color: ${({ theme }) => theme.colors.gray200};
  }
`;

export { StyledInput };
