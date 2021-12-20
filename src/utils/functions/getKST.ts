export const getKST = (tomorrow: boolean) => {
  const curr = new Date();
  const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  const TOMORROW_TIME_DIFF = 24 * 60 * 60 * 1000;
  const kr_curr = new Date(utc + KR_TIME_DIFF);
  const kr_tomorrow = new Date(utc + KR_TIME_DIFF + TOMORROW_TIME_DIFF);
  return tomorrow ? kr_tomorrow : kr_curr;
};
