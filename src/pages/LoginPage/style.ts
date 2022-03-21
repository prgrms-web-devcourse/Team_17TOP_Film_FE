import styled from '@emotion/styled';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  gap: 20px;
  padding-bottom: 50px;
`;

const Picture = styled.picture`
  source,
  img {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 640px;
    width: calc(100% - 50px);
    object-fit: contain;
  }
`;

const Text = styled.h1`
  position: fixed;
  top: 15vh;
  ${({ theme: { fonts } }) => fonts.Heading3};
  text-align: center;
  color: white;
  line-height: 1.4;
  z-index: 1;
`;

const Button = styled.button`
  position: fixed;
  max-width: 580px;
  bottom: 5vh;
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
export { Wrapper, Picture, Text, Button };
