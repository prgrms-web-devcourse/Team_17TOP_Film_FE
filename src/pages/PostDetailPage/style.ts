import styled from '@emotion/styled';
import { Button, Text } from '../../components/atoms';

const PostDetailWrapper = styled.div`
  margin-top: 52px;
`;
const OpenerInfo = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.gaps.gap2} ${({ theme }) => theme.gaps.default_margin};
  background-color: ${({ theme }) => theme.colors.gray50};
`;
const PostInfo = styled.div`
  margin: ${({ theme }) => theme.gaps.gap2} ${({ theme }) => theme.gaps.default_margin};
  position: relative;
`;

const AuthoryityList = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const RelativeDay = styled(Text)`
  display: inline-block;
  padding: 4px ${({ theme }) => theme.gaps.gap1};
  border: 1px solid ${({ theme }) => theme.colors.red900};
  background-color: rgba(245, 84, 78, 0.3);
  color: ${({ theme }) => theme.colors.red900};
  border-radius: 4px;
  margin-top: ${({ theme }) => theme.gaps.gap1};
`;
const LocationButton = styled(Button)`
  padding: ${({ theme }) => theme.gaps.gap1};
  border-color: ${({ theme }) => theme.colors.gray500};
  ${({ theme }) => theme.fonts.Paragraph2};
  color: ${({ theme }) => theme.colors.gray600};
  line-height: 1;
`;

const DateText = styled(Text)`
  span {
    font-weight: bold;
    margin-right: ${({ theme }) => theme.gaps.gap1};
  }
`;
const PostContent = styled.div`
  margin: ${({ theme }) => theme.gaps.gap2} ${({ theme }) => theme.gaps.default_margin};
  padding-top: ${({ theme }) => theme.gaps.gap3};
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
`;

export {
  PostDetailWrapper,
  OpenerInfo,
  PostInfo,
  PostContent,
  AuthoryityList,
  LocationButton,
  RelativeDay,
  DateText,
};
