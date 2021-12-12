const validateNickname = (nickname: string) => {
  const validateLogic = /^[A-Za-z0-9+]{2,20}$/;

  if (nickname.length < 2 || nickname.length > 20) {
    return '닉네임은 2자 이상 20자 이하여야 합니다.';
  }
  if (!validateLogic.test(nickname)) {
    return '영어와 숫자만 가능합니다!';
  }
  return;
};

export { validateNickname };
