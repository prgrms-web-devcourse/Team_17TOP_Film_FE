import styled from '@emotion/styled';
import { Text } from '@components/atoms';
const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.gray100};
  &::before {
    content: '';
    width: 30%;
    height: 100vh;
    background: linear-gradient(to right, rgba(241, 255, 245, 0.5), rgba(241, 255, 245, 0));
    z-index: 10;
    position: fixed;
    left: 0;
  }
  &::after {
    content: '';
    width: 30%;
    height: 100vh;
    background: linear-gradient(to left, rgba(241, 255, 245, 0.5), rgba(241, 255, 245, 0));
    z-index: 10;
    position: fixed;
    right: 0;
  }
`;
const LoadingTitle = styled(Text)`
  position: fixed;
  top: 120px;
`;
const FilmImgWrapper = styled.div`
  width: auto;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
`;
const FilmImg = styled.img`
  width: 40vw;
  max-width: 300px;
  margin: 0 20px;
`;

const LoadingSubText = styled(Text)`
  position: fixed;
  bottom: 80px;
`;
export { LoaderWrapper, FilmImgWrapper, FilmImg, LoadingTitle, LoadingSubText };
