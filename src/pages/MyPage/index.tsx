import React from 'react';
import { Header } from '../../components/atoms';
const MyPage = () => {
  return (
    <>
      <Header
        leftComp="backBtn"
        handleLeftEvent={() => console.log('left clidk')}
        rightComp="timeline"
        handleRightEvent={() => console.log('right click')}
      />
    </>
  );
};
export default MyPage;
