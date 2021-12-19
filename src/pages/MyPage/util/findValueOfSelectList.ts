import { selectList, tabList, TabListKey } from '../constants';

const findValueOfSelectList = (selectedTab: TabListKey) => {
  const key = Object.entries(tabList).find(([_, value]) => value === selectedTab);
  if (!key) return [''];
  return Object.values(selectList[key[0] as TabListKey]);
};
export default findValueOfSelectList;
