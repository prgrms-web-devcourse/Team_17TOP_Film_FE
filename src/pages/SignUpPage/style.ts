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
  margin: 60px ${({ theme: { gaps } }) => gaps.default_margin} 0;
`;
const Label = styled.label`
  ${({ theme: { fonts } }) => fonts.Heading4}
`;
const Input = styled.input`
  width: calc(100% - 15px);
  height: 56px;
  border: 1px solid #c4c4c4;
  font-size: 20px;
  margin: 60px 0 0;
  padding-left: 10px;
  padding-left: 10px;
  &:focus {
    border: 1px solid black;
  }
`;
const FooterBtn = styled.button`
  margin-top: 400px;
  width: 100%;
  height: 60px;
  border: none;
  background-color: black;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  @media (max-height: 700px) {
    margin-top: 300px;
  }
  @media (max-height: 700px) {
    margin-top: 220px;
  }
`;
export { Header, BackBtn, SignUpFormWrapper, Label, Input, FooterBtn };
