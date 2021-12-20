import styled from '@emotion/styled';
import { Text } from '../../atoms';

const BottomSheetWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.gaps.default_margin};
  padding-top: ${({ theme }) => theme.gaps.gap3};
  background-color: #fff;
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  z-index: 100;
  border-radius: 32px 0 0 0;
  box-shadow: 0 -10px 20px rgb(0 0 0 / 10%);
`;
const FilmTitle = styled(Text)`
  margin-right: ${({ theme }) => theme.gaps.gap4};
  line-height: 1.2;
  word-break: keep-all;
`;
const FilmPreviewText = styled(Text)`
  padding: ${({ theme }) => theme.gaps.gap2} 0;
  color: ${({ theme }) => theme.colors.gray700};
`;
const FilmInfoWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  padding: ${({ theme }) => theme.gaps.gap2} 0;
  position: relative;
`;
const AuthorityList = styled.div`
  position: absolute;
  right: 0;
  bottom: ${({ theme }) => theme.gaps.gap2};
`;
const FilmOpenDate = styled(Text)`
  margin-top: ${({ theme }) => theme.gaps.gap1};
  color: ${({ theme }) => theme.colors.gray600};
`;
const CloseBtn = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.gaps.gap3};
  right: ${({ theme }) => theme.gaps.default_margin};
  color: ${({ theme }) => theme.colors.gray900};
  padding: 0;
`;

export {
  BottomSheetWrapper,
  FilmTitle,
  FilmPreviewText,
  FilmInfoWrapper,
  AuthorityList,
  FilmOpenDate,
  CloseBtn,
};
