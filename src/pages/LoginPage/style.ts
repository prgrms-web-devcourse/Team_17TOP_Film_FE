import styled from '@emotion/styled';

const Wrapper = styled.div`
  position: relative;
  max-width: 640px;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  padding-top: 120px;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center center;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Text = styled.h1`
  margin: 0 0 42px 0;
  ${({ theme: { fonts } }) => fonts.Heading3}
  color: white;
  font-weight: 400;
  line-height: 1.4;
`;
const Img = styled.img`
  max-width: 290px;
  width: 100%;
  height: 380px;
`;
const Button = styled.button`
  position: fixed;
  max-width: 580px;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 56px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  ${({ theme: { fonts } }) => fonts.Paragraph1};
  font-weight: bold;
  color: white;
`;
export { Wrapper, Container, Text, Img, Button };
