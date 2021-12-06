import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin: ${({ theme: { gaps } }) => `${gaps.gap5} ${gaps.default_margin}`};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

const Text = styled.h1`
  margin: 100px 0 50px;
  ${({ theme: { fonts } }) => fonts.Heading3}
  font-weight: 400;
`;
const Img = styled.img`
  max-width: 290px;
  width: 100%;
  height: 380px;
`;
const Button = styled.button`
  position: absolute;
  bottom: -100px;
  left: 0px;
  width: 100%;
  height: 48px;
  color: white;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  ${({ theme: { fonts } }) => fonts.smallText};
`;
export { Wrapper, Container, Text, Img, Button };
