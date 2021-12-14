import styled from '@emotion/styled';
import { Text } from '../../atoms';

const BottomSheetWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: #fff;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  z-index: 100;
`;
const FilmTitle = styled(Text)``;
const FilmPreviewText = styled(Text)`
  margin-top: ${({ theme }) => theme.gaps.gap2};
  color: ${({ theme }) => theme.colors.gray700};
`;
const DateWrapper = styled.div`
  padding: ${({ theme }) => theme.gaps.gap2} 0;
`;
const FilmOpenDate = styled(Text)`
  margin-top: ${({ theme }) => theme.gaps.gap1};
`;
const CloseBtn = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.gaps.default_margin};
  right: ${({ theme }) => theme.gaps.default_margin};
  color: ${({ theme }) => theme.colors.gray900};
`;

export { BottomSheetWrapper, FilmTitle, FilmPreviewText, DateWrapper, FilmOpenDate, CloseBtn };
