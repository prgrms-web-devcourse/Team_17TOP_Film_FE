import { Container, Wrapper, Text, Img, Button } from './style';
import LoginWallPaper from '../../assets/LoginPage/LoginWallPaper.jpeg';
const LogInPage = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          당신의 순간을 <br /> 그대로 남겨보세요
        </Text>
        <Img src={LoginWallPaper} alt="로그인 페이지 이미지" />
        <Button>카카오로 3초만에 시작하기</Button>
      </Container>
    </Wrapper>
  );
};
export default LogInPage;