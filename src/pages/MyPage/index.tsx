import React from 'react';
import { Header } from '../../components/atoms';
import Profile from './components/Profile';
import Tabs from './components/Tabs';
import { Body } from './style';
const MyPage = () => {
  return (
    <>
      <Header
        leftComp="backBtn"
        handleLeftEvent={() => console.log('left clidk')}
        rightComp="timeline"
        handleRightEvent={() => console.log('right click')}
      />
      <Body>
        <Profile />
        <Tabs />
      </Body>
    </>
  );
};
export default MyPage;
