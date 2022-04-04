export const removeUserToken = () => {
  try {
    localStorage.removeItem('token');
  } catch (e) {
    console.error(e);
  }
};
