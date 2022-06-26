import { Picture, Text, Button, Wrapper } from './style';
import LoginWallPaperAvif from '@assets/images/LoginWallPaper/LoginWallPaperAvif.avif';
import LoginWallPaperWebp from '@assets/images/LoginWallPaper/LoginWallPaperWebp.webp';
import LoginWallPaperJpeg from '@assets/images/LoginWallPaper/LoginWallPaperJpeg.jpeg';

const LogInPage = () => {
  const handleBtnClick = () => {
    location.href = process.env.REACT_APP_REDIRECT_URI as string;
  };

  return (
    <Wrapper>
      <Picture>
        <source srcSet={LoginWallPaperAvif} type="image/avif" />
        <source srcSet={LoginWallPaperWebp} type="image/webp" />
        <img src={LoginWallPaperJpeg} alt="메인 이미지" />
      </Picture>
      <Text>
        당신의 순간을 <br /> 그대로 남겨보세요
      </Text>
      <Button onClick={handleBtnClick}>카카오로 3초만에 시작하기</Button>
    </Wrapper>
  );
};
export default LogInPage;
