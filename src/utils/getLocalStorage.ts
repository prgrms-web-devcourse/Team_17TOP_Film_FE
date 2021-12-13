const getLocalStorage = (tokenName: string, errorFallback: () => void) => {
  try {
    const token = localStorage.getItem(tokenName);
    if (!token) {
      return errorFallback();
    }
    return JSON.parse(token);
  } catch (error) {
    console.error(error);
    errorFallback();
  }
};
export { getLocalStorage };
