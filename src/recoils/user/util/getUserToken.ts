export const getUserToken = (): string | null => {
  try {
    const token = localStorage.getItem('token');
    return token ? JSON.parse(token) : null;
  } catch (e) {
    console.error(e);
    return null;
  }
};
