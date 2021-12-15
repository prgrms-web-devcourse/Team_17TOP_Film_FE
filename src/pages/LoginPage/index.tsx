import { Container, Wrapper, Text, Img, Button } from './style';
import LoginWallPaper from '../../assets/LoginPage/LoginWallPaper.jpeg';
import { Navigate, useLocation } from 'react-router-dom';
import Toast from '../../components/organism/Toast';
import { useEffect } from 'react';

const LogInPage = () => {
  const { state } = useLocation();
  useEffect(() => {
    if (!state?.needLogin) return;
    Toast.info('로그인이 필요합니다.');
    history.pushState({ state: { needLogin: false } }, '');
  }, []);

  const handleBtnClick = () => {
    location.href = process.env.REACT_APP_REDIRECT_URI as string;
  };
  return (
    <Wrapper>
      <Container>
        <Text>
          당신의 순간을 <br /> 그대로 남겨보세요
        </Text>
        <Img src={LoginWallPaper} alt="로그인 페이지 이미지" />
        <Button onClick={handleBtnClick}>카카오로 3초만에 시작하기</Button>
      </Container>
    </Wrapper>
  );
};
export default LogInPage;
