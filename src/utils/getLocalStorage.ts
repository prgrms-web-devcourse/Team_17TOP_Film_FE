const getLocalStorage = (key: string, errorFallback: () => void) => {
  try {
    const token = localStorage.getItem(key);
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
