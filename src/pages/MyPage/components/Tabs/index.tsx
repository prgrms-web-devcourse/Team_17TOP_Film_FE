import { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { TabListKey } from '../../constants';
import { Tab, Wrapper } from './style';

interface Props {
  selectedTab: TabListKey;
  tabList: TabListKey[];
  handleTabClick: (tabName: TabListKey) => void;
}
const Tabs = ({ selectedTab, tabList, handleTabClick }: Props) => {
  return (
    <Wrapper>
      {tabList.map((tabName) => (
        <Tab
          key={tabName}
          isSelected={selectedTab === tabName}
          onClick={() => handleTabClick(tabName)}
        >
          {tabName}
        </Tab>
      ))}
    </Wrapper>
  );
};
export default Tabs;
