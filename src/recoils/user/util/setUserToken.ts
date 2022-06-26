import Toast from '@refactors/atoms/Toast';

export const setUserToken = (token: string) => {
  try {
    localStorage.setItem('token', JSON.stringify(token));
  } catch (e) {
    console.error(e);
    Toast.warn({ msg1: '에러가 발생했습니다. 잠시후 다시 시도해 주세요!' });
  }
};
