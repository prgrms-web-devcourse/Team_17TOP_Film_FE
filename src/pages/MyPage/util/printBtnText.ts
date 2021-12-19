import compareTodayDateAndAvailableAt from './compareTodayDateAndAvailableAt';

const printBtnText = (availableAt: string, state: string, isAuthor: boolean) => {
  const canOpen = compareTodayDateAndAvailableAt(availableAt);

  if (canOpen) {
    if (state === ' OPENED') {
      return '필름 보기';
    }
    if (state === 'OPENABLE') {
      return '필름 찾기';
    }
  }
  if (!canOpen && state === 'CLOSED') {
    if (isAuthor) {
      return '필름 나오는중';
    }
  }
  return '필름 삭제하기';
};
export default printBtnText;
