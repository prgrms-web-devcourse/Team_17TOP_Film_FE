import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Header, BackBtn, SignUpFormWrapper, Label, Input, FooterBtn } from './style';
import { BiLeftArrowAlt } from 'react-icons/bi';
import { validateNickname } from './util';
import { signUpApi } from '../../utils/apis/user';

const SignUpPage = () => {
  const [nickname, setNickname] = useState('');
  const [inpError, setInpError] = useState('');

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nicknameErrorMsg = validateNickname(nickname);
    if (nicknameErrorMsg) {
      return setInpError(nicknameErrorMsg);
    }
    const token = JSON.parse(localStorage.getItem('token') as string);
    signUpApi(nickname, token);
    setNickname('');
    setInpError('');
  };

  return (
    <>
      <Header>
        <BackBtn>
          <BiLeftArrowAlt size={20} />
        </BackBtn>
        회원가입
      </Header>
      <SignUpFormWrapper onSubmit={handleSubmit}>
        <Label htmlFor="nickname">닉네임을 입력해 주세요</Label>
        <Input
          id="nickname"
          placeholder="2자 이상, 20자 이하 문자, 숫자 가능"
          value={nickname}
          onChange={handleNicknameChange}
        />
        {inpError}
        <FooterBtn type="submit">회원가입 완료</FooterBtn>
      </SignUpFormWrapper>
    </>
  );
};
export default SignUpPage;
