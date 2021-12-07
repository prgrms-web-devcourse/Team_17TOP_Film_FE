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
        <Input id="nickname" placeholder="닉네임을 입력해 주세요" />
        <FooterBtn type="submit">회원가입 완료</FooterBtn>
      </SignUpFormWrapper>
    </>
  );
};
export default SignUpPage;
