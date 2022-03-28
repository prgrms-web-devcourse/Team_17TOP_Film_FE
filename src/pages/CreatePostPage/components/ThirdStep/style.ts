import styled from '@emotion/styled';
import { Text } from '@refactors/atoms';
import calenderIcon from '@assets/icons/icon_calender.svg';
import { PostFormContainer } from '../../style';

const ThirdStepContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: 54px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ThirdStepPostFormContainer = styled(PostFormContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DateInput = styled.input`
  width: 100%;
  background: white;
  padding: 0 16px 0 16px;
  height: 48px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.colors.gray400};
  border-style: solid;
  ::-webkit-datetime-edit {
    ${({ theme }) => theme.fonts.Paragraph1}
    font-weight: 700;
    color: ${({ value, theme }) => (value ? theme.colors.gray800 : theme.colors.gray500)};
    margin-left: 38px;
    padding-left: 16px;
    border-left: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray500};
    line-height: 48px;
    height: 48px;
  }
  ::-webkit-calendar-picker-indicator {
    position: absolute;
    background: url(${calenderIcon}) no-repeat;
    left: 19px;
  }
  box-sizing: border-box;
`;
const GuideText = styled(Text)`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray800};
  margin-top: 200px;
  margin-bottom: 100px;
`;
const SearchTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.gap1};
`;

export {
  FormWrapper,
  ThirdStepPostFormContainer,
  DateInput,
  GuideText,
  ThirdStepContainer,
  SearchTitleWrapper,
};
