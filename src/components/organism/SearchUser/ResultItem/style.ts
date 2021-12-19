import styled from '@emotion/styled';
import { Image, Text } from '../../../atoms';

const ItemContainer = styled.div`
  padding: 12px 0;
  :not(:nth-last-of-type(2)) {
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.gray400};
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  border-radius: 4px;
  cursor: pointer;
`;

const RoundImage = styled(Image)`
  border-radius: 50%;
  margin-right: 26px;
`;

const NicknameText = styled(Text)`
  align-self: center;
`;

export { ItemContainer, RoundImage, NicknameText, ItemWrapper };