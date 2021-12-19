const compareTodayDateAndAvailableAt = (availableAt: string) => {
  const availableDate = availableAt.split('-').map((dateFormat) => parseInt(dateFormat, 10));
  const dateObj = new Date();
  const todayDate = [dateObj.getFullYear(), dateObj.getMonth() + 1, dateObj.getDate()];
  let canOpen = true;
  for (const index in availableDate) {
    if (todayDate[index] < availableDate[index]) {
      canOpen = false;
      break;
    }
  }
  return canOpen;
};
export default compareTodayDateAndAvailableAt;
