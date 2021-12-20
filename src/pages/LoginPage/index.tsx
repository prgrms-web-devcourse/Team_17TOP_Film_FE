import { Container, Wrapper, Text, Button } from './style';
import LoginWallPaper from '../../assets/LoginPage/LoginWallPaper.jpeg';

const LogInPage = () => {
  const handleBtnClick = () => {
    location.href = process.env.REACT_APP_REDIRECT_URI as string;
  };
  return (
    <Wrapper style={{ backgroundImage: `url(${LoginWallPaper})` }}>
      <Container>
        <Text>
          당신의 순간을 <br /> 그대로 남겨보세요
        </Text>
        <Button onClick={handleBtnClick}>카카오로 3초만에 시작하기</Button>
      </Container>
    </Wrapper>
  );
};
export default LogInPage;
