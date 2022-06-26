import styled from '@emotion/styled';
import { Button, Text } from '../../../../components/atoms';

const Wrapper = styled.div`
  margin: ${({ theme: { gaps } }) => `0 ${gaps.default_margin} 32px`};
  padding: ${({ theme: { gaps } }) => gaps.default_margin};
  box-shadow: ${({ theme: { shadows } }) => shadows.shadow1};
  border-radius: 4px;
  position: relative;
`;
const Title = styled.div`
  display: flex;
  flex-direction: row;
  width: calc(100% - 40px);
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 5px;
`;
const FilmText = styled(Text)`
  margin-right: 12px;
`;

const Preview = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const MidContainer = styled.div`
  margin: 10px 0 28px 0;
  padding: 10px 0 0 0;
  border-top: 1px solid ${({ theme: { colors } }) => colors.gray300};
  display: flex;
  align-item: center;
  justify-content: space-between;
`;
const MidContainerLeft = styled.div`
  display: flex;
  align-items: center;
`;
const FilmBtn = styled(Button)`
  width: 100%;
  height: 48px;
`;
export { Wrapper, Title, Preview, MidContainer, MidContainerLeft, FilmText, FilmBtn };
