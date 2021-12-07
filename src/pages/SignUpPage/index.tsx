import React from 'react';
import { Header, BackBtn, SignUpFormWrapper, Label, Input, FooterBtn } from './style';
import { BiLeftArrowAlt } from 'react-icons/bi';
const SignUpPage = () => {
  return (
    <>
      <Header>
        <BackBtn>
          <BiLeftArrowAlt size={20} />
        </BackBtn>
        회원가입
      </Header>
      <SignUpFormWrapper>
        <Label htmlFor="nickname">닉네임을 입력해 주세요</Label>
        <Input id="nickname" placeholder="2자 이상, 20자 이하 문자, 숫자 가능" />
        <FooterBtn type="submit">회원가입 완료</FooterBtn>
      </SignUpFormWrapper>
    </>
  );
};
export default SignUpPage;
