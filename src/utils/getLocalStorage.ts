const getLocalStorage = (key: string) => {
  try {
    const token = localStorage.getItem(key);
    return token ? JSON.parse(token) : '';
  } catch (error) {
    console.error(error);
  }
};
export { getLocalStorage };
