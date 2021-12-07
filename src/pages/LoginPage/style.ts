import styled from '@emotion/styled';

const Wrapper = styled.div`
  margin: ${({ theme: { gaps } }) => `${gaps.gap5} ${gaps.default_margin}`};
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 100px 0 0;
  @media (max-height: 750px) {
    margin: 50px 0 0;
  }
`;

const Text = styled.h1`
  margin: 0 0 42px 0;
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
  bottom: -152px;
  left: 0px;
  width: 100%;
  height: 48px;
  color: white;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  ${({ theme: { fonts } }) => fonts.smallText};
  @media (max-height: 700px) {
    bottom: -100px;
  }
`;
export { Wrapper, Container, Text, Img, Button };
