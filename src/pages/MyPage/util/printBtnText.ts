import { buttonText } from '../constants';
import compareTodayDateAndAvailableAt from './compareTodayDateAndAvailableAt';

const printBtnText = (availableAt: string, state: string, isAuthor: boolean) => {
  const canOpen = compareTodayDateAndAvailableAt(availableAt);

  if (canOpen) {
    if (state === 'OPENED') {
      return buttonText.WATCH_FILM;
    }
    if (state === 'OPENABLE') {
      return buttonText.FIND_FILM;
    }
  }
  if (!canOpen && state === 'CLOSED') {
    if (isAuthor) {
      return buttonText.REMOVE_FILM;
    }
  }
  return buttonText.LOAD_FILM;
};
export default printBtnText;
