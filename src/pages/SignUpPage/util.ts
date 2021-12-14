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
const handleSignUpApiError = (errorCode: string) => {
  console.log(errorCode);
  if (errorCode === 'U001') {
    return console.error('중복된 닉네임이 존재합니다.');
  }
  if (errorCode === 'U002') {
    return console.error('이미 계정이 존재합니다.');
  }
  if (errorCode === 'U003') {
    return console.error('닉네임 양식이 일치하지 않습니다.');
  }
};

export { validateNickname, handleSignUpApiError };
