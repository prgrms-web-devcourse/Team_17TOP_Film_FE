import { buttonText } from '../constants';

const printBtnText = (availableAt: string, state: string, isAuthor: boolean) => {
  if (state === 'OPENED') {
    return buttonText.WATCH_FILM;
  }
  if (state === 'OPENABLE') {
    return buttonText.FIND_FILM;
  }
  if (state === 'CLOSED') {
    if (isAuthor) {
      return buttonText.REMOVE_FILM;
    }
  }
  return buttonText.LOAD_FILM;
};
export default printBtnText;
