import styled from '@emotion/styled';
import { Image, Text } from '../../../atoms';

const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-content: center;
  text-align: center;
`;
const RemoveBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.colors.gray500};
`;
const ProfileImg = styled(Image)`
  border-radius: 50%;
  overflow: hidden;
`;
const ContentWrapper = styled.div`
  margin-top: 12px;
  margin-right: 20px;
`;
const NicknameText = styled(Text)`
  width: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export { CardContainer, RemoveBtn, ProfileImg, ContentWrapper, NicknameText };
