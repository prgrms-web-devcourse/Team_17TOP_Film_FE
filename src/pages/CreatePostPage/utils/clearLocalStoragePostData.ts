export const clearLocalStoragePostData = () => {
  window.localStorage.removeItem('location');
  window.localStorage.removeItem('secondStepData');
  window.localStorage.removeItem('availableAt');
  window.localStorage.removeItem('filename');
};
