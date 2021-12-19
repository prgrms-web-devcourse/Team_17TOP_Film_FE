import styled from '@emotion/styled';
import { Image } from '../../../atoms';

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
`;
const ContentWrapper = styled.div`
  margin-top: 12px;
  margin-right: 20px;
`;

export { CardContainer, RemoveBtn, ProfileImg, ContentWrapper };
