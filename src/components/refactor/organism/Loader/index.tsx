import { ReactNode } from 'react';
import Lottie from 'react-lottie';
import loader from '@assets/lotties/loader.json';
import { LoaderWrapper, FilmImgWrapper, FilmImg, LoadingTitle, LoadingSubText } from './style';
import filmOpenIcon from '@assets/icons/icon_marker_open.svg';
import filmCloseIcon from '@assets/icons/icon_marker_close.svg';

interface Props {
  children?: ReactNode;
}
const Loader = ({ children }: Props) => {
  return (
    <LoaderWrapper>
      <LoadingTitle textType="Heading3">{children}</LoadingTitle>
      <FilmImgWrapper>
        <FilmImg src={filmCloseIcon} alt="" />
        <FilmImg src={filmOpenIcon} alt="" />
        <FilmImg src={filmCloseIcon} alt="" />
      </FilmImgWrapper>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loader,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        height={'30%'}
        width={'30%'}
      />
      <LoadingSubText textType="Paragraph2">
        위치 정보 제공을 허용하지 않으면
        <br />
        서비스 이용이 어렵습니다
      </LoadingSubText>
    </LoaderWrapper>
  );
};

export default Loader;
