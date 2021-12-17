import styled from '@emotion/styled';

const Header = styled.div`
  width: 100%;
  height: 52px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme: { colors } }) => colors.shadow};
`;
const BackBtn = styled.button`
  position: absolute;
  left: ${({ theme: { gaps } }) => gaps.default_margin};
  background-color: transparent;
  border: none;
  color: black;
  cursor: pointer;
`;
const SignUpFormWrapper = styled.form`
  margin: ${({ theme: { gaps } }) => gaps.gap4} ${({ theme: { gaps } }) => gaps.default_margin} 0;
`;
const Label = styled.label`
  ${({ theme: { fonts } }) => fonts.Heading3}
`;
const Input = styled.input`
  width: calc(100% - 15px);
  height: 56px;
  border: 1px solid #c4c4c4;
  font-size: ${({ theme: { fonts } }) => fonts.Paragraph1};
  margin: ${({ theme: { gaps } }) => gaps.gap4} 0 0 0;
  padding-left: 10px;
  &:focus {
    outline: 1px solid black;
  }
`;
const ErrorText = styled.p`
  margin: 10px 0;
  color: red;
`;
const FooterBtn = styled.button`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 0;
  width: ${({ theme: { gaps } }) => `calc(100% - ${gaps.default_margin})`};
  height: 60px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;
export { Header, BackBtn, SignUpFormWrapper, Label, Input, FooterBtn, ErrorText };
