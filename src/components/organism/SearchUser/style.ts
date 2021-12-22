import styled from '@emotion/styled';
import { Text } from '../../atoms';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  ${({ theme }) => theme.fonts.Paragraph1};
  padding: 0 16px 0 16px;
  height: 48px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-style: solid;
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray500};
  }
  box-sizing: border-box;
  :focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const ResultListContainer = styled.div`
  padding-left: 22px;
  padding-right: 22px;
  border: solid 1px;
  border-top: none;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray400};
  overflow-y: scroll;
`;
const WarnText = styled(Text)`
  position: absolute;
  bottom: -10;
  color: ${({ theme }) => theme.colors.red900};
  margin-top: ${({ theme }) => theme.gaps.gap1};
  margin-left: ${({ theme }) => theme.gaps.gap1};
`;
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;
export { Container, Input, ResultListContainer, WarnText, InputWrapper };
